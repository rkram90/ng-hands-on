import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { WebWorkerService } from '../service/web-worker.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-paint-img-by-web-worker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paint-img-by-web-worker.component.html',
  styleUrl: './paint-img-by-web-worker.component.css',
  providers: [WebWorkerService],
})
export class PaintImgByWebWorkerComponent {
  @ViewChild('imagePreview', { static: true })
  protected imagePreview!: ElementRef<HTMLCanvasElement>;

  private imagePreviewCtx!: CanvasRenderingContext2D | null;

  constructor(private workerService: WebWorkerService) {}

  ngOnInit() {
    this.imagePreviewCtx = this.imagePreview.nativeElement.getContext('2d');
  }

  loadImage(e: Event) {
    const image = (e.target as HTMLInputElement).files![0];
    createImageBitmap(image).then((bitmap) => {
      this.imagePreview.nativeElement.width = bitmap.width;
      this.imagePreview.nativeElement.height = bitmap.height;
      this.imagePreviewCtx?.drawImage(bitmap, 0, 0);
    });
  }

  applyFilter() {
    const { width, height } = this.imagePreview.nativeElement;
    const imageData = this.imagePreviewCtx?.getImageData(0, 0, width, height);
    if (imageData) {
      this.runBackgroundTask(imageData);
    }
  }

  runBackgroundTask(imageData: ImageData): void {
    const taskData = { task: 'task1', data: imageData }; // Your task data

    this.workerService
      .runTask(taskData)
      .pipe(take(1))
      .subscribe({
        next: (processedImage) => {
          console.log('Task result:', processedImage);
          // Handle the result
          this.imagePreviewCtx?.putImageData(processedImage, 0, 0);
        },
        error: (error) => {
          console.error('Task error:', error);
        },
      });
  }

  ngOnDestroy(): void {
    this.workerService.terminateWorker();
  }
}
