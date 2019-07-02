import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestUser } from 'src/app/model/test';
import { AuthService } from 'src/app/login/auth.service';
import { TestService } from 'src/app/services/test.service';
import { HelperService } from 'src/app/helper/helper.service';


@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent implements OnInit {

  /*   @Input() listTestUserGrammar : TestUser[] ;
    @Input() listTestUserListening : TestUser[] ; */
  @Output() testbyId = new EventEmitter();

  listGrammar: TestUser[] = [];
  listListening: TestUser[] = [];
  listTests: TestUser[] = [];

  constructor(private authService: AuthService, private testService: TestService, private helper: HelperService) {


    console.log("TestContentComponent");
    this.getListsTest();

  }

  ngOnInit() {

  }

    getListsTest() : void{
      let listTests = this.helper.testsbyUser;
      for (let index = 0; index < listTests.length; index++) {
        let type = listTests[index].type;
        let status= listTests[index].status;
        if(status !== this.helper.statusTestCompleted ){
          if(type == this.helper.typeTestGrammar){
            this.listGrammar.push(listTests[index]);

          }
          if(type == this.helper.typeTestListening){
            this.listListening.push(listTests[index]);

          }
        }
      }

    }

    openTestById(id : string){
      console.log("openTestById:" + id);
      this.testbyId.emit(id);
    }

}


  /* 
    getTests() {
  
      this.testUser.user = this.authService.userLogged._id;
      /*    console.log('populado  --> ' + this.testUser.user); 
      this.testService.testUser(this.testUser).subscribe(data => {
        if (data) {
          console.log("dataaaa -> " + data);
          for (let index = 0; index < data.length; index++) {
            let type = data[index].type;
            let typestatus = data[index].status;
            console.log("completed" +typestatus);
            if(typestatus !== "completed"){
              console.log("completed" + data[index]);
              if (type == "grammar" ) {
                console.log("grammar" + data[index]);
                this.listGrammar.push(data[index]);
              }
              if (type == "listening") {
                console.log("listening" + data[index]);
                this.listListening.push(data[index]);
              }
            }
  
          }
  
        }
      },
        error => {
          alert('error: ' + error);
  
        });
  
    } */
