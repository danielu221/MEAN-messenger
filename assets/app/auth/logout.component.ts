import { Component,OnInit} from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";


@Component({
    selector: 'app-logout',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <p> Currently logged in as: {{currentUserMail}} </p>
        <button class="btn btn-danger" (click)="onLogoutClick()">Logout</button>
    </div>
    `
})

export class LogoutComponent implements OnInit{
    currentUserMail:String;
    constructor(private authService:AuthService, private router:Router){}
    ngOnInit(){
      this.currentUserMail=localStorage.getItem('userName');
    }
    onLogoutClick(){
      this.authService.logout();
      this.router.navigate(['/auth','signin']);
    }
}
