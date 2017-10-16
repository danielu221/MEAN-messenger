import { Component} from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms"
import { AuthService } from './auth.service';
import { User } from "./user.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl:'./signin.component.html'
})

export class SigninComponent{
  myForm: FormGroup;
  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(){
    this.myForm = new FormGroup({
      email:new FormControl(null, [
        Validators.required,
        Validators.email]),
      password:new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    const user = new User (this.myForm.value.email,this.myForm.value.password);
    console.log(user.firstName+" "+user.lastName);
    this.authService.signin(user)
      .subscribe(
        data => {
            localStorage.setItem('token',data.token);
            localStorage.setItem('userId',data.userId);
            localStorage.setItem('userName',data.userMail);
            this.router.navigateByUrl('/')
        },
        error => console.error(error)
      );


    this.myForm.reset();
  }
}
