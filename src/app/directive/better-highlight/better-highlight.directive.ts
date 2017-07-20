import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() highlightBckgrndClr  = 'blue';
  @Input() highlightClr = 'white';

  normalBckgrndClr: string;
  normalClr: string;

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'black';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.normalBckgrndClr = this.backgroundColor;
    this.normalClr = this.color;
  }

  // listening to mouse enter
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.color = this.highlightClr;
    this.backgroundColor = this.highlightBckgrndClr;
  }

  // listening to mouse leave
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // if I set the style this way the backgroundColor and the color won't change so in the next change detection
    // the change won't be detected on those two binded properties
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');

    this.color = this.normalClr;
    this.backgroundColor = this.normalBckgrndClr;
  }

}
