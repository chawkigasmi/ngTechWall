import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding ('style.backgroundColor') bg = "red";
  @HostBinding ('style.color') cl = "white";
  @HostBinding ('style.cursor') pointer = "pointer";
  constructor() { }
  @HostListener('mouseenter') mouseenter(){
    this.bg = "white";
    this.cl = "red";
  }
  @HostListener('mouseleave') mouseleave(){
    this.bg = "red";
    this.cl = "white";
  }
}
