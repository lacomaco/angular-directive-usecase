import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

type Toggle = {
  on: boolean;
  setOn: Function;
  setOff: Function;
  toggle: Function;
};

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  on = true;

  @Input('toggleOn')
  initialState = true;

  constructor(
    private tpl: TemplateRef<{ $implicit: Toggle }>,
    private vc: ViewContainerRef
  ) {}

  ngOnInit() {
    this.vc.createEmbeddedView(this.tpl, {
      $implicit: {
        on: this.on,
        setOn: this.setOn,
        setOff: this.setOff,
        toggle: this.toggle
      }
    });
  }

  setOn() {
    this.on = true;
  }

  setOff() {
    this.on = false;
  }

  toggle() {
    this.on != this.on;
  }
}
