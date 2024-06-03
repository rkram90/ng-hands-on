import { Routes } from '@angular/router';
import { TodosComponent } from './component/todos/todos.component';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];
