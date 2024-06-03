import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tap-item]',
  standalone: true,
})
export class TabItemDirective {
  @Input() name: string | undefined;
  constructor(public template: TemplateRef<any>) {}
}
