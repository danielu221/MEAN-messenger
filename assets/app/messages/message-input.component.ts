import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Message } from "./message.model"

import { MessageService } from "./message.service"

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls:['message-input.component.css'],
    providers:[MessageService]
})
export class MessageInputComponent {
  constructor(private messageService:MessageService){}

  onSaveClick(input:string){
      const message=new Message(input,'Matt');
      this.messageService.addMessage(message);
  }
}
