import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Message } from "./message.model"

@Component({
    selector: 'app-message-list',
    template:`
        <div class="col-md-8 col-md-offset-2">
        <app-message
          *ngFor="let message of messages"
          [message]="message"
          (editClicked)="message.content= $event"></app-message>
        </div>
    `     
      ,
    styleUrls:['message.component.css']
})
export class MessageListComponent {
    messages:Message[]=
    [
      new Message ("Content of message1", "Matt"),
      new Message ("Content of message2", "Matt")
    ];
}
