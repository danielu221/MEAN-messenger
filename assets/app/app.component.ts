import { Component } from '@angular/core';
import { Message } from "./messages/message.model"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:['app.component.css']
})
export class AppComponent {
    messages:Message[]=
    [
      new Message ("Content of message1", "Matt"),
      new Message ("Content of message2", "Matt")
    ];
}
