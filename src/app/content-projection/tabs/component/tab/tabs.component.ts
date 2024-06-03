import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { TabItemDirective } from '../../directives/tab-item.directive';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabItemDirective, NgFor, NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabItemDirective) tabs!: QueryList<TabItemDirective>;

  currentTab!: TemplateRef<any>;

  setTemplate(tab: TabItemDirective) {
    this.currentTab = tab.template;
  }

  ngAfterContentInit() {
    console.log(this.tabs);
    if (this.tabs.length > 0) {
      this.currentTab = this.tabs.first.template;
    }
  }
}
