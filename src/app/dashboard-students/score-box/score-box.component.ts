import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { TestService } from 'src/app/services/test.service';
import { TestUser } from 'src/app/model/test';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-score-box',
  templateUrl: './score-box.component.html',
  styleUrls: ['./score-box.component.css']
})
export class ScoreBoxComponent implements OnInit {

  private countGrammarTestCompleted: number = 0;
  private countListeminTestCompleted: number = 0;

  private testUser: TestUser = new TestUser();

/*   @Input() countTestsGrammarCompleted : number = 0 ;
  @Input()  countTestsListeningCompleted: number = 0; */
  
  listTests : TestUser[] = [];

  countGrammar : number = 0;
  countListening : number = 0;

  constructor(private authservice: AuthService, private helper : HelperService) {
    console.log('chamou score -->d');
    //this.getCountTests();
    this.getTests();
  }
 

  ngOnInit() {

  }


  //method for get count test
  getTests() : void{
    this.listTests = this.helper.testsbyUser;
    for (let index = 0; index < this.listTests.length; index++) {
        let type = this.listTests[index].type;
        let status = this.listTests[index].status;
      if (type == this.helper.typeTestGrammar && status == this.helper.statusTestCompleted){
          this.countGrammar ++;
      }
      if (type == this.helper.typeTestListening && status == this.helper.statusTestCompleted){
        this.countListening ++;
      }
    }
  }

}


 /*  getCountTests() {

/*     this.testUser.user = this.authservice.userLogged._id;
    /*    console.log('populado  --> ' + this.testUser.user); 
    this.testService.testUser(this.testUser)._subscribe(data => {
      if (data) {
        console.log(data);
/*         this.countGrammarTestCompleted = 2;
        this.countListeminTestCompleted = 10; 
        for (let index = 0; index < data.length; index++) {
          let type = data[index].type;
          let typstatus = data[index].status;
          if (type == "grammar" && typstatus == "completed") {
            this.countGrammarTestCompleted = this.countGrammarTestCompleted + 1;
          }
          if (type == "listening" && typstatus == "completed") {
            this.countListeminTestCompleted = this.countListeminTestCompleted + 1
          }


        }

      }
    },
      error => {
        alert('error: ' + error);

      }); 

  } */