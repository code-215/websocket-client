import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {Message} from "./message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sockets-ui';
  response: object | undefined
  greeting: string = '';
  name: string = '';


  constructor(private appService: AppService) {
    this.appService.responseSubject.subscribe( data => {
      this.greeting = data.content
    });
  }

  connect() {
    this.appService.connect()
  }

  disconnect() {
    this.appService.disconnect()
  }

  sendMessage() {
    this.appService.send(new Message(this.name))
  }

  // handleMessage() {
  //   this.greeting = this.response
  // }
}
