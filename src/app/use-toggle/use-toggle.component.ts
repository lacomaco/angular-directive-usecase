import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-toggle',
  template: `
    <div *appToggle="let controller; on: false">
      <button (click)="controller.setOn()">Blue pill</button>
      <button (click)="controller.setOff()">Red pill</button>

      <div>
        <span *ngIf="controller.on">on</span>
        <span *ngIf="!controller.on">off</span>
      </div>
    </div>
  `
})
export class UseToggleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
