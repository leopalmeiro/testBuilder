import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HelperService } from '../helper/helper.service';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { TestUser } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  httpHeaders = new HttpHeaders().set(this.helper.headerName, this.helper.headerType);

  constructor(private http: HttpClient, private helper: HelperService, private authService: AuthService) { }

  //method for find all tests by students
  public testUser(testUser: TestUser): Observable<TestUser[]> {

    let httpHeaders = new HttpHeaders()
      .set(this.helper.headerName, this.helper.headerType);
    let params = new HttpParams();
    params = params.append(this.helper.userReqParam, testUser.user);
    if (testUser.type !== undefined ) {
      params = params.append(this.helper.typeReqParam, testUser.type);
    }
    if (testUser.status !== undefined ) {
      params = params.append(this.helper.statusReqParam, testUser.status);
    }



    console.log('paramnssss --> ' + params.toString());


    return this.http.get<TestUser[]>(this.helper.apiUriTestsTestUser, {
      headers: httpHeaders,
      params: params
    });
  }

  //method for find test byID
  public getTestById(id: string): Observable<TestUser> {


    let params = new HttpParams()
      .set(this.helper.idReqParam, id);


    return this.http.get<TestUser>(this.helper.apiUriTestsTestById, {
      /* headers: httpHeaders, */
      params: params
    });
  }


  //method for find test byID
  public updateTestByID(testUser: TestUser): Observable<TestUser> {

    return this.http.put<TestUser>(this.helper.apiUriTestsUpdateTestByID, testUser, { headers: this.httpHeaders });


  }

  public scoreInformationOfTestes(testUser: TestUser) {
    let test = testUser;
    test.totQuestions = testUser.questions.length.toString();

    let countQuestionsCorrect = 0;

    for (let q = 0; q < testUser.questions.length; q++) {

      for (let a = 0; a < testUser.questions[q].answers.length; a++) {
        if (testUser.questions[q].answers[a].isSelected && testUser.questions[q].answers[a].isCorrect) {
          countQuestionsCorrect++
        }

      }

    }
    test.totQuestiosCorrect = countQuestionsCorrect.toString();
    return test;
  }



}
