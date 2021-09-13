import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]',
  exportAs: 'appMouseF'
})
export class MouseDirective {
  private _state = {
    x: 0,
    y: 0
  };

  get state() {
    return this._state;
  }

  constructor() {}

  @HostListener('mousemove', ['$event'])
  handleMouseMove(event: MouseEvent) {
    this._state = {
      x: event.clientX,
      y: event.clientY
    };
  }
}
