import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-mouse',
  template: `
    <div appMouse #mouse="appMouseF">
      <p>The mouse position is {{ mouse.state.x }}, {{ mouse.state.y }}</p>
    </div>
  `
})
export class UseMouseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
