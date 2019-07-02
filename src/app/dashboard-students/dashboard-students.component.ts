import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from '../login/auth.service';
import { TestUser } from '../model/test';
import { TestService } from '../services/test.service';
import { HelperService } from '../helper/helper.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.css']
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

  
  constructor( private authservice: AuthService, private router: Router, private testService: TestService, private helper: HelperService) { 
    console.log("dashboard constructor");
    this.getTestsByUser();

  }

  ngOnInit() {
    
  }

  logout(){
    this.authservice.userLogged = new Login;
    this.router.navigate(["login"]);

  }

  getTestsByUser(){
    console.log("getTestsByUser");
    this.userTest.user = this.authservice.userLogged._id;
    this.testService.testUser(this.userTest).subscribe(data => {

      if (data) {
        // save tests in the helper
        this.helper.testsbyUser = data;
        console.log(JSON.stringify(data));
    }
      //activeted components
      this.activedTestContent = true;
      this.activedScore = true;
    },
      error => {
        alert('error: ' + error);

      });
  } 

/* method open test by ID */
  onOpenTestById(data){
    // find ttests by id
    //actived components
    this.helper.idTest = data;
 
    this.activedTest = true;
    this.activedTestContent = false;



    
  }
}
