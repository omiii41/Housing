import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

loggdinUser: string;
  constructor(private alert: AlertifyService) { }

  ngOnInit() {
  }

  loggedin(){
    this.loggdinUser = localStorage.getItem('token');
    return this.loggdinUser;

  }
  onLogout(){
    localStorage.removeItem('token');
    this.alert.success('Logout success');
  }
}
