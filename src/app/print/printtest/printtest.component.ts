import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';
import { TestUser } from 'src/app/model/test';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printtest',
  templateUrl: './printtest.component.html',
  styleUrls: ['./printtest.component.css']
})
export class PrinttestComponent implements OnInit {

  schoolName: string = this.helper.schoolName;
  test : TestUser;

  constructor(private helper: HelperService, private testService: TestService,  private route: ActivatedRoute,
    private router: Router) {
      console.log("call constructor -> PrinttestComponent");
     }

  ngOnInit() {
    console.log("call ngOnInit -> PrinttestComponent");
    //this.getTestByid();
  }


/* getTestByid(){
  let id = this.route.snapshot.queryParams.get('id');
  this.testService.getTestById(id)
    .subscribe(data => this.test = data);
} */
  
}

