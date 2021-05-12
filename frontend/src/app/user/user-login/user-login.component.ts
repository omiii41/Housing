import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice: AuthService,
              private alert: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm);
    const token = this.authservice.authUser(loginForm.value);
    if (token){
      localStorage.setItem('token', token.userName);
      this.alert.success('Login Success');
      this.router.navigate(['/']);
    }else {
      this.alert.error('Login Failed');
    }

  }
}
