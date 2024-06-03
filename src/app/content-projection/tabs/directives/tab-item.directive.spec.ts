import { TemplateRef, EmbeddedViewRef, ElementRef } from '@angular/core';
import { TabItemDirective } from './tab-item.directive';

class MockTemplateRef extends TemplateRef<any> {
  override createEmbeddedView(context: any): EmbeddedViewRef<any> {
    // Return a mock EmbeddedViewRef
    return {} as EmbeddedViewRef<any>;
  }

  get elementRef(): ElementRef<any> {
    // Return a mock ElementRef
    return {} as ElementRef<any>;
  }
}

describe('TabItemDirective', () => {
  it('should create an instance', () => {
    const template = new MockTemplateRef();
    const directive = new TabItemDirective(template);
    expect(directive).toBeTruthy();
  });
});
