import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { TestUser } from 'src/app/model/test';
import { HelperService } from 'src/app/helper/helper.service';


@Component({
  selector: 'app-score-box',
  templateUrl: './scorebox.component.html',
  styleUrls: ['./scorebox.component.css']
})
export class ScoreBoxComponent implements OnInit {



  @Input() testsbyUser: TestUser[] = [];
  @Output() loadListTest = new EventEmitter();

  countGrammar: number = 0;
  countListening: number = 0;



  constructor(private authservice: AuthService, private helper: HelperService ) {
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



  OnClickOpenListTest(type){
    if(this.countGrammar > 0 && type === this.helper.typeTestGrammar) {
      this.loadListTest.emit(type);
    }
    if(this.countListening > 0 && type === this.helper.typeTestListening ){
      this.loadListTest.emit(type);
    }

  }



  
}

