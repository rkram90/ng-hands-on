import { Component } from '@angular/core';
import { TabsComponent } from '../tab/tabs.component';
import { TabItemDirective } from '../../directives/tab-item.directive';

@Component({
  selector: 'app-tab-home',
  standalone: true,
  imports: [TabsComponent, TabItemDirective],
  templateUrl: './tab-home.component.html',
  styleUrl: './tab-home.component.css',
})
export class TabHomeComponent {}
