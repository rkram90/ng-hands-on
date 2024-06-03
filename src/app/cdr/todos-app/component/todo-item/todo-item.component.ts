import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoInterface } from '../../types/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input({
    required: true,
  })
  todo!: TodoInterface;

  checkRender() {
    console.log('check Render called!');
    return true;
  }
}
