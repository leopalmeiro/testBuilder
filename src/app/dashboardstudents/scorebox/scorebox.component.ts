import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { TestService } from 'src/app/services/test.service';
import { TestUser } from 'src/app/model/test';
import { HelperService } from 'src/app/helper/helper.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-score-box',
  templateUrl: './scorebox.component.html',
  styleUrls: ['./scorebox.component.css']
})
export class ScoreBoxComponent implements OnInit {



  @Input() testsbyUser: TestUser[] = [];

  countGrammar: number = 0;
  countListening: number = 0;

  @Output() loadListTest = new EventEmitter();

  constructor(private authservice: AuthService, private helper: HelperService, ) {
    console.log("call constructor -> ScoreBoxComponent");


  }


  ngOnInit() {
    console.log("call ngOnInit -> ScoreBoxComponent");
    this.getTests();
  }


  //method for get count test
  getTests() {
    console.log("call getTests -> ScoreBoxComponent");


    for (let index = 0; index < this.testsbyUser.length; index++) {
      let type = this.testsbyUser[index].type;
      let status = this.testsbyUser[index].status;
      if (type == this.helper.typeTestGrammar && status == this.helper.statusTestCompleted) {
        this.countGrammar++;
      }
      if (type == this.helper.typeTestListening && status == this.helper.statusTestCompleted) {
        this.countListening++;
      }
    }
  }

  onReloadComponets() {
    console.log("call onReloadComponets -> ScoreBoxComponent");
    this.getTests();
  }

  OnClickOpenListTest(testId){
    this.loadListTest.emit(testId);
  }



  
}

