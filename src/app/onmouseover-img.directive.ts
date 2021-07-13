import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnmouseoverImg]'
})
export class OnmouseoverImgDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') over(): void {
    const height: number = this.el.nativeElement.getBoundingClientRect().height;
    this.renderer.setStyle(this.el.nativeElement, 'height', `${height + 50}px`);
  }

  @HostListener('mouseout') out(): void {
    const height: number = this.el.nativeElement.getBoundingClientRect().height;
    this.renderer.setStyle(this.el.nativeElement, 'height', `${height - 50}px`);
  }
}