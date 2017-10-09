import { Component,Input ,Output,EventEmitter,OnInit} from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls:['message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  message:Message;

  ngOnInit(){
    this.messageService.messageIsEdit.subscribe(
      (message:Message) => this.message=message
    );
  }

  constructor(private messageService:MessageService){}

  onSubmit(form:NgForm){
      if(this.message){
        // edit message
        this.message.content=form.value.content;
        this.messageService.updateMessage(this.message)
            .subscribe(result => console.log(result))
        this.message=null;
      }
      else{
        //Create
        const message=new Message(form.value.content,'Matt');
        this.messageService.addMessage(message)
            .subscribe(
              data=>console.log(data),
              error=>console.log(error)
            );
      }
      form.resetForm();
  }
  onClear(form:NgForm){
    this.message=null;
    form.resetForm();
  }
}
