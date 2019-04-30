import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{message}}
    Text: {{text}}
    <app-child (messageEvent)="receiveMessage($event)" (textEvent)="receiveText($event)"></app-child>
  `,
})
export class ParentComponent {

  constructor() { }

  message: string;
  text: string;

  receiveMessage($event) {
    debugger
    this.message = $event
  }

  receiveText($event) {
    this.text = $event;
  }
}