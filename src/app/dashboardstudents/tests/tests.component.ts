import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import { TestService } from '../../services/test.service';
import { TestUser } from '../../model/test';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Question } from '../../model/question';
import { throwError } from 'rxjs';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {



  test: TestUser;

  //buttons pagination
  showNextButton: boolean = true;
  showPreviewButton: boolean = false;

  numberOfpages: number = 0;
  questionIndex: number = 0;
  totalOfquestions: number = 0;
  totalQuestionOfPage: number = 0;
  startItem: number = 0;
  endItem: number = 0;

  @Input() testId: string;
  @Output() loadDashBoardStudent = new EventEmitter();

  constructor(private helper: HelperService, private testService: TestService, private router: Router) {
    console.log("call method constructor");


  }

  ngOnInit() {
    console.log("call ngOnInit");

    this.getTestsById(this.testId);




  }

  /**
  * @name getTestsById
  * @description This method for selected the Answer
  * @input Id - test ID
  */
  getTestsById(id) {
    console.log("call method getTestsById");
/*     let testUser = new TestUser() */
    this.testService.getTestById(id).subscribe(data => {

      if (data) {

        //populate data
        this.test = data;
        //settind index for question and answer
        for (let q = 0; q < this.test.questions.length; q++) {
          this.test.questions[q].questionIndex = q;
          for (let a = 0; a < this.test.questions[q].answers.length; a++) {
            this.test.questions[q].answers[a].answerIndex = a;

          }

        }

        //setting configuration of pages
        this.configurePages(data.questions.length);

      }
    },
      error => {
        alert('error: ' + error);

      });


  }


  /**
  * @name selectAnswer
  * @description This method for selected the Answer
  * @input $event , question index = q, answers index = a
  */
  selectAnswer(event, q, a) {
    console.log("call method selectAnswer");

    for (let index = 0; index < this.test.questions[q].answers.length; index++) {
      this.test.questions[q].answers[index].isSelected = false;
    }
    //setting question and answers
    this.test.questions[q].answers[a].isSelected = true;
    this.test.questions[q].isAnswered = true;

  }




  /**
  * @name configurePages
  * @description This method for configure all attributes for open the page
  * @input length of data array
  */
  configurePages(length) {

    //number of pages
    this.numberOfpages = this.helper.totQuestionsStudentPagination / length;
    //questionIndex start with 0
    this.questionIndex = 0;
    this.totalOfquestions = length;
    this.totalQuestionOfPage = this.helper.totQuestionsStudentPagination;

    //configure screen
    this.startItem = 0;
    this.endItem = this.helper.totQuestionsStudentPagination;

  }


  /**
  * @name onChangePage
  * @description This method for onChangePage()
  * @input type: string(next, preview) , index : number , endItem : number
  */
  onChangePage(type: string, startItem: number, endItem: number) {

    console.log("call method onChangePage");
    let error = this.checkQuestionIsAnswered(this.startItem, this.endItem);
    if (error.length !== 0) {
      alert(error);
      return false;
    }
    if (type === 'next') {
      //show preview button
      this.showPreviewButton = true;

      //configure next itens
      this.startItem = startItem + this.totalQuestionOfPage;
      this.endItem = endItem + this.totalQuestionOfPage;

      if (this.endItem >= this.totalOfquestions) {
        //last element
        this.endItem = this.totalOfquestions;
        this.showNextButton = false;
        this.showPreviewButton = true;
      }

    } else {

      this.endItem = startItem//endItem - this.totalQuestionOfPage;
      this.startItem = startItem - this.totalQuestionOfPage;
      if (this.startItem === 0) {
        //this.endItem = this.totalQuestionOfPage
        this.showPreviewButton = false;
      }
      if (!this.showNextButton) {
        this.showNextButton = true;
      }
    }

  }

  /**
  * @name checkQuestionIsAnswered
  * @description This method for check if has some questions without be answered
  * @input  startItem : number , endItem : number
  * @returns errors[]
  */

  checkQuestionIsAnswered(startItem: number, endItem: number) {
    console.log("call method checkQuestionIsAnswered");
    let error = [];

    for (let index = startItem; index < endItem; index++) {
      if (!this.test.questions[index].isAnswered) {
        let message = "<p> Question: " + this.test.questions[index].questionsId + " needs to be answered.</p>"
        error.push(message);
      }
    }
    if (error) {
      return error;

    }

  }

  saveTestUser() {

    //sett test completed
    this.test.status = this.helper.statusTestCompleted;
    this.testService.updateTestByID(this.test).subscribe(data => {

      if (data) {
        alert("Test has been Saved"); this.loadDashBoardStudent.emit();
      } else {
        alert("error")
      }

    });
  }



}
