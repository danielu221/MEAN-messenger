import { Component,OnInit} from '@angular/core';
import { Error } from './error.model';
import { ErrorService } from './error.service';

@Component({
    selector: 'app-error',
    templateUrl:'./error.component.html',
    styleUrls:['error.component.css']
})

export class ErrorComponent implements OnInit{
    error:Error;
    display='none';

    constructor(private errorService:ErrorService){}

    ngOnInit(){
      this.errorService.errorOcurred
        .subscribe(
          (error:Error)=>{
            this.error=error;
            this.display="block";
          }
        )
    }

    onErrorHandled(){
      this.display='none';
    }
}
