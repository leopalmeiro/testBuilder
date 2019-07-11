import { Component, OnInit } from '@angular/core';
import { TestUser } from 'src/app/model/test';
import { TestService } from 'src/app/services/test.service';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-listtests',
  templateUrl: './listtests.component.html',
  styleUrls: ['./listtests.component.css']
})
export class ListtestsComponent implements OnInit {

  listTest : TestUser[] = [];
  test : TestUser = new TestUser();

  constructor(private testService : TestService, private helpService: HelperService) { }

  ngOnInit() {

  }
  
  /**
  * @name loadListTest
  * @description This method for check if has some questions without be answered
  * @input  startItem : number , endItem : number
  * @returns errors[]
  */
  loadListTest(data){
    console.log("call loadListTest -> ListtestsComponent");
    if(data === this.helpService.typeTestGrammar){
      this.test.type = this.helpService.typeTestGrammar;
      this.getListTestsByType(this.test);

    }
    if(data === this.helpService.typeTestListening){
      this.test.type = this.helpService.typeTestListening;
      this.getListTestsByType(this.test);

    }


  }

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
}
