import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from '../login/auth.service';
import { TestUser } from '../model/testUser';
import { TestService } from '../services/test.service';
import { HelperService } from '../helper/helper.service';

@Component({
  selector: 'app-dashboard-students',
  templateUrl: './dashboard-students.component.html',
  styleUrls: ['./dashboard-students.component.css']
})
export class DashboardStudentsComponent implements OnInit {
  
  //always dashboard will be actived components
  activedTestContent : boolean = false;
  activedTest: boolean = false;
  activedScore: boolean = false;

  private userTest: TestUser = new TestUser();

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
        console.log("entrou no if data" + data.length);
        this.helper.testsbyUser = data;
 /*        for (let index = 0; index < data.length; index++) {
          let type = data[index].type;
          let typestatus = data[index].status;
          //
          this.helper.testsbyUser = data;
          //verification for set data for use in the child components
          if (type == "grammar" &&  typestatus == "completed") {
            this.countTestsGrammarCompleted ++;
          }
          if(type == "grammar" &&  typestatus !== "completed"){
            this.listTestUserGrammar.push(data[index]);
          }
          //verification for set data for use in the child components
          if (type == "listening" &&  typestatus == "completed") {
            this.countTestsListeningCompleted ++;
          }
          if(type == "listening" &&  typestatus !== "completed"){
            this.listTestUserListening.push(data[index]);
          }
        }
      } */
    }
      //activeted components
      this.activedTestContent = true;
      this.activedScore = true;
    },
      error => {
        alert('error: ' + error);

      });
  } 

/*   openTestsByid(){
    console.log("OPEN TEST BY ID" );
  } */
  onOpenTestById(data){
    console.log("ID DO FILHO" + data);
    this.activedTestContent = false;
    this.activedTest = true; 

    
  }
}
