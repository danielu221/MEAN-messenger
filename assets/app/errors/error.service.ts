import { EventEmitter} from "@angular/core";
import { Error } from './error.model';

export class ErrorService{
  errorOcurred=new EventEmitter<Error>();

  handleError(error:any){
    const errorData=new Error(error.title, error.error.messagge);
    this.errorOccured.emit(errorData);

  }
}
