import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnmouseoverRow]'
})
export class OnmouseoverRowDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') over() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseout') out() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

}
