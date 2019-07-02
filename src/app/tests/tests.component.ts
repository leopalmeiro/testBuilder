import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper/helper.service';
import { TestService } from '../services/test.service';
import { TestUser } from '../model/test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {


  radioQuestion: boolean = false;

  test : TestUser = new TestUser();

  

  constructor(private helper : HelperService, private testService : TestService) { 
    console.log("chamou TestsComponent");
    this.getTestsById(this.helper.idTest);

  }

  ngOnInit() {
    console.log("chamou TestsComponent -> ngOnInit");
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


}
