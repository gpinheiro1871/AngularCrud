import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customFor]'
})
export class ForDirective implements OnInit {

  @Input('customForIn')
  numbers!: number[];

  @Input('customForUsing')
  innerContent!: string;

  private container: ViewContainerRef;
  private template: TemplateRef<any>;

  constructor(container: ViewContainerRef, template: TemplateRef<any>) { 
    this.container = container;
    this.template = template;
  }

  ngOnInit(): void {
    for (const number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
  }

}
