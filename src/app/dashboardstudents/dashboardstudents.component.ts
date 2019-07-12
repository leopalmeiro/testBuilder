import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  activedTestContent: boolean = false;
  activedTest: boolean = false;
  activedScore: boolean = false;
  activedListTest: boolean = false;
  
  schoolName : string = this.helper.schoolName;
  //new testUserObject
  userTest: TestUser = new TestUser();

  testsbyUser : TestUser[] = [];
  //configuration of lists and counts
  listTestUserGrammar: TestUser[] = [];
  listTestUserListening: TestUser[] = [];
  countTestsGrammarCompleted: number = 0;
  countTestsListeningCompleted: number = 0;

  //input for use in anoter components
  testId: number = 0;
  setTypeList:string;




  constructor(private authservice: AuthService, private router: Router, private testService: TestService, private helper: HelperService) {
    console.log("call constructor -> DashboardStudentsComponent");


  }

  ngOnInit() {
    console.log("call ngOnInit -> DashboardStudentsComponent");
    this.getTestsByUser();
  }

  logout() {
    console.log("call logout -> DashboardStudentsComponent");
    this.authservice.logout();
    this.router.navigate(["login"]);

  }

  getTestsByUser() {
    console.log("call getTestsByUser -> DashboardStudentsComponent");
    this.userTest.user = this.authservice.currentUserValue._id;
    this.testService.testUser(this.userTest).subscribe(data => {

      if (data) {


        this.testsbyUser = data;
        /* console.log(JSON.stringify(data)); */
        this.activedScore = true;
        this.activedTestContent = true;
        this.activedTest = false;
        this.activedListTest = false;

      }

    },
      error => {
        alert('error: ' + error);

      });
  }

  /* method open test by ID */
  onOpenTestById(data) {
    // find ttests by id
    //actived components
    this.testId = data;

    //activeted components
    this.activedTestContent = false;
    this.activedTest = true;

  }


  onReloadComponets() {
    this.activedTestContent = false;
    this.activedTest = false;
    this.activedScore = false;
    this.activedListTest= false;
    this.getTestsByUser();

  }

  onloadListTest($event){
    this.activedTestContent = false;
    this.activedTest = false;
    this.activedScore = true;
    this.activedListTest = true;
    this.setTypeList = $event;
    
  }
}
