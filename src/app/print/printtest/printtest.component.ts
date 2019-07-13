import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';
import { TestUser } from 'src/app/model/test';
import { TestService } from 'src/app/services/test.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-printtest',
  templateUrl: './printtest.component.html',
  styleUrls: ['./printtest.component.css']
})
export class PrinttestComponent implements OnInit {

  schoolName: string = this.helper.schoolName;
  test: TestUser;

  constructor(private helper: HelperService, private testService: TestService, private authservice: AuthService, private route: ActivatedRoute,
    private router: ActivatedRoute) {
    console.log("call constructor -> PrinttestComponent");
  }

  ngOnInit() {
    console.log("call ngOnInit -> PrinttestComponent");
    this.getTestByid();
  }


  /**
  * @name getTestByid
  * @description This for find test by test ID
  * @returns test
  */
  getTestByid() {
    console.log("call getTestByid -> PrinttestComponent");

    this.route.paramMap.subscribe(params => {
      let id = params.get(this.helper.idHttpReqParam);
      this.testService.getTestById(id).subscribe(data => {
        if (data) {
          this.test = data;
          this.testService.scoreInformationOfTestes(this.test);
        }
      },
        error => {
          alert('error: ' + error);

        });
    });

  }
}
