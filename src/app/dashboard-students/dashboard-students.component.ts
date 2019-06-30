import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.css']
})
export class DashboardStudentsComponent implements OnInit {
  
  //always dashboard will be actived
  activedDashboard : boolean = true;
  activedTest: boolean = false;

  constructor( private authservice: AuthService, private router: Router) { 

  }

  ngOnInit() {

  }

  logout(){
    this.authservice.userLogged = new Login;
    this.router.navigate(["login"]);

  }

}
