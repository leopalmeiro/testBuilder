import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper/helper.service';
import { TestService } from '../services/test.service';
import { TestUser } from '../model/test';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {


  radioQuestion: boolean = false;

  test : TestUser = new TestUser();
  color = '#3498dbf5';
  step = "stdep1";

  constructor(private helper : HelperService, private testService : TestService) { 
    console.log("chamou TestsComponent");


  }

  ngOnInit() {
    console.log("chamou TestsComponent -> ngOnInit");
    this.getTestsById(this.helper.idTest);
  }


  getTestsById(id){
    console.log("getTestsById");

    this.testService.getTestById(id).subscribe(data => {

      if (data) {
        // save tests in the helper
        this.test = data;



    }
      //activeted components
    },
      error => {
        alert('error: ' + error);

      });

  } 

  selectAnswer(event, q, a){

    for (let index = 0;index < this.test.questions[q].answers.length; index++) {
      this.test.questions[q].answers[index].isSelected = false;   
    }
    this.test.questions[q].answers[a].isSelected = true;


  }


}
