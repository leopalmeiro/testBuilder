import { Component, OnInit, NgModule ,Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from '../login/auth.service';
import { TestUser } from '../model/test';
import { TestService } from '../services/test.service';
import { HelperService } from '../helper/helper.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboardstudents.component.html',
  styleUrls: ['./dashboardstudents.component.css']
})
export class DashboardStudentsComponent implements OnInit {
  
  //config dashboard; always dashboard will be actived components
  activedTestContent : boolean = false;
  activedTest: boolean = false;
  activedScore: boolean = false;
   
  //new testUserObject
  userTest: TestUser = new TestUser();


  //configuration of lists and counts
  listTestUserGrammar: TestUser[] = [];
  listTestUserListening: TestUser[] = [];
  countTestsGrammarCompleted: number = 0;
  countTestsListeningCompleted: number = 0;

  testId : number = 0;


  
  constructor( private authservice: AuthService, private router: Router, private testService: TestService, private helper: HelperService) { 
    console.log("dashboard constructor");


  }

  ngOnInit() {
    this.getTestsByUser();
  }

  logout(){
    this.authservice.logout();
    this.router.navigate(["login"]);

  }

  getTestsByUser(){
    console.log("getTestsByUser");
    this.userTest.user = this.authservice.currentUserValue._id;
    this.testService.testUser(this.userTest).subscribe(data => {

      if (data) {
        // save tests in the helper
        this.helper.testsbyUser = data;
        /* console.log(JSON.stringify(data)); */
              //activeted components
      this.activedTestContent = true;
      this.activedScore = true; 
    }

    },
      error => {
        alert('error: ' + error);

      });
  } 

/* method open test by ID */
  onOpenTestById(data){
    // find ttests by id
    //actived components
    this.testId = data;
 
    //activeted components
    this.activedTestContent = false;
    this.activedTest = true;
 
  }
  onReloadComponets(){
        //activeted components
        this.activedTestContent = true;
        this.activedTest = false;
  }

}
