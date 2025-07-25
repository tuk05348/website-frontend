import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) {}

  @Output() public clickOutside = new EventEmitter<MouseEvent>(); //event emitter for a click outside target element

  @HostListener('document:click', ['$event', '$event.target']) //host listener to listen for click on document
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) { 
        return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) { //if element clicked does not contain target, emit event
      this.clickOutside.emit(event);
    }
  }
}
