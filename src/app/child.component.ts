import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
      <button (click)="sendText2()">Send Text</button>
  `,
})
export class ChildComponent {

  message: string = "tEXTE!"
  text: string = "Sou eu novamente!"
  @Output() messageEvent = new EventEmitter<string>();
  @Output() textEvent = new EventEmitter<string>();
  constructor() { }

  sendMessage() {
    debugger
    this.messageEvent.emit(this.message)
  }

  sendText2() {
    this.textEvent.emit(this.text);
  }
}