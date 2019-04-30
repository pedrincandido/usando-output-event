import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibiling',
  template: `
    {{message}}
    <input type="text" [(ngModel)]="text">
    <button (click)="newMessage()">New Message</button>
  `
})
export class SibilingComponent implements OnInit {
  text: string;
  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  
  newMessage() {
    this.data.changeMessage(this.text);
  }

}
