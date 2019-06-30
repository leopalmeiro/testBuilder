import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { TestService } from 'src/app/services/test.service';
import { TestUser } from 'src/app/model/testUser';

@Component({
  selector: 'app-score-box',
  templateUrl: './score-box.component.html',
  styleUrls: ['./score-box.component.css']
})
export class ScoreBoxComponent implements OnInit {

  private countGrammarTestCompleted: number = 0;
  private countListeminTestCompleted: number = 0;

  private testUser: TestUser = new TestUser();

  constructor(private authservice: AuthService, private testService: TestService) {
    console.log('chamou score -->d');
    this.getCountTests();
  }

  ngOnInit() {

  }


  getCountTests() {
    //setting User ID logged 
    /*    console.log('Login --> ' + this.authservice.userLogged._id);
       console.log('test User --> ' +  this.testUser); */
    this.testUser.user = this.authservice.userLogged._id;
    /*    console.log('populado  --> ' + this.testUser.user); */
    this.testService.testUser(this.testUser).subscribe(data => {
      if (data) {
        console.log(data);
/*         this.countGrammarTestCompleted = 2;
        this.countListeminTestCompleted = 10; */
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

  }

}
