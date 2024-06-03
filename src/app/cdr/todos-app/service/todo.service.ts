import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoEnum } from '../types/todo-enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  filter$ = new BehaviorSubject(TodoEnum.all);
}
