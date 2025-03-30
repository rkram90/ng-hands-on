import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebWorkerService {
  private worker: Worker | undefined;
  private messageSubject = new Subject<any>();

  constructor() {
    // Check if Web Workers are supported
    if (typeof Worker !== 'undefined') {
      // Create new worker
      this.worker = new Worker(
        new URL('../workers/task.worker', import.meta.url),
        { type: 'module' }
      );

      // Listen for messages from worker
      this.worker.onmessage = (event: MessageEvent) => {
        this.messageSubject.next(event.data);
      };

      // Handle worker errors
      this.worker.onerror = (error) => {
        console.error('Worker error:', error);
        this.messageSubject.error(error);
      };
    } else {
      console.warn('Web Workers are not supported in this environment');
    }
  }

  // Method to send task to worker
  runTask(taskData: any): Observable<any> {
    if (this.worker) {
      this.worker.postMessage(taskData);
      return this.messageSubject.asObservable();
    } else {
      // Fallback for environments without Web Worker support
      return new Observable((observer) => {
        const result = this.processTaskFallback(taskData);
        observer.next(result);
        observer.complete();
      });
    }
  }

  // Fallback method if Web Workers aren't available
  private processTaskFallback(data: any): any {
    return {
      originalData: data,
      processed: true,
      timestamp: Date.now(),
    };
  }

  // Cleanup
  terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}
