import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoInterface } from '../../types/todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  todos: TodoInterface[] = [
    {
      id: '1',
      text: 'First todo',
      isCompleted: true,
    },
    {
      id: '2',
      text: 'Second todo',
      isCompleted: true,
    },

    {
      id: '3',
      text: 'Third todo',
      isCompleted: false,
    },
  ];

  changeText(): void {
    console.log('changeText');
  }

  changeArray(): void {
    /* this.todos[0].text = 'Foo'; */
    this.todos[0] = { ...this.todos[0], text: 'Foo' };
    console.log(this.todos);
  }
}
