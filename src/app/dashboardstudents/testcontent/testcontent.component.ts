import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TestUser } from 'src/app/model/test';
import { TestService } from 'src/app/services/test.service';
import { HelperService } from 'src/app/helper/helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-content',
  templateUrl: './testcontent.component.html',
  styleUrls: ['./testcontent.component.css']
})
export class TestContentComponent implements OnInit {

  @Input() testsbyUser: TestUser[] = [];
  @Output() testbyId = new EventEmitter();

  listGrammar: TestUser[] = [];
  listListening: TestUser[] = [];
  listTests: TestUser[] = [];

  constructor(private router: Router, private testService: TestService, private helper: HelperService) {


    console.log("call constructor -> TestContentComponent");

  }

  ngOnInit() {
    console.log("call ngOnInit -> TestContentComponent");
    this.getListsTest();

  }

  getListsTest(): void {
    console.log("call getListsTest -> TestContentComponent");
/*     let listTests = this.helper.testsbyUser; */
    let listTests = this.testsbyUser;
    for (let index = 0; index < listTests.length; index++) {
      let type = listTests[index].type;
      let status = listTests[index].status;
      if (status !== this.helper.statusTestCompleted) {
        if (type == this.helper.typeTestGrammar) {
          this.listGrammar.push(listTests[index]);

        }
        if (type == this.helper.typeTestListening) {
          this.listListening.push(listTests[index]);

        }
      }
    }

  }

  openTestById(id) {
    console.log("openTestById:" + id);
    this.testbyId.emit(id);
  }

}


