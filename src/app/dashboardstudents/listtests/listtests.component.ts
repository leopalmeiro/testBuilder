import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestUser } from 'src/app/model/test';
import { TestService } from 'src/app/services/test.service';
import { HelperService } from 'src/app/helper/helper.service';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listtests',
  templateUrl: './listtests.component.html',
  styleUrls: ['./listtests.component.css']
})
export class ListtestsComponent implements OnInit {

  listTest : TestUser[] = [];
  test : TestUser = new TestUser();
  @Input() typeList : string;
  @Output() closeListTest = new EventEmitter

  constructor(private testService : TestService, private helpService: HelperService, private authService : AuthService, private router: Router) {
    console.log("call constructor -> ListtestsComponent");
   }

  ngOnInit() {
    console.log("call ngOnInit -> ListtestsComponent");
    this.loadListTest();
  }
  
  /**
  * @name loadListTest
  * @description This method receive parameters of emmiter
  * @input  data: text
  * @returns void
  */
  loadListTest(){
    
    console.log("call loadListTest -> ListtestsComponent");
    this.test.user = this.authService.currentUserValue._id;
    if(this.typeList === this.helpService.typeTestGrammar){
      this.test.type = this.helpService.typeTestGrammar;
      this.getListTestsByType(this.test);

    }
    if(this.typeList === this.helpService.typeTestListening){
      this.test.type = this.helpService.typeTestListening;
      this.getListTestsByType(this.test);

    }


  }

    /**
  * @name getListTestsByType
  * @description This for find list of User tests by type
  * @input  test: TestUser
  * @returns listTest
  */

  getListTestsByType(test : TestUser){

    this.testService.testUser(test).subscribe(data => {

      if (data) {


        this.listTest = data;

      }

    },
      error => {
        alert('error: ' + error);

      });
  }



  onClickClose(){
    this.closeListTest.emit();
  }

  openPrintTest(){
    console.log("call method openPrintTest -> ListtestsComponent");
    window.open('http://localhost:4200/print/printTestCompleted/1');
  }
}
