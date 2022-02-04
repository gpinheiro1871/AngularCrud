import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  private element: ElementRef;

  constructor(element: ElementRef) { 
    this.element = element

    element.nativeElement.style.color = '#e35e6b';
  }

}