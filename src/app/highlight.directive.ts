import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private hvote: ElementRef) {
    hvote.nativeElement.style.color = 'orange';
  }


}
