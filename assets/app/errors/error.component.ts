import { Component,OnInit} from '@angular/core';
import { Error } from './error.model';


@Component({
    selector: 'app-error',
    templateUrl:'./error.component.html',
    styleUrls:['error.component.css']
})

export class ErrorComponent {
    error:Error;
    display='none';

    onErorHandled(){
      this.display='none';
    }
}
