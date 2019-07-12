import { Injectable } from '@angular/core';
import { TestUser } from '../model/test';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {


  //school Name
  public schoolName :string = "M.U.A English Center";
  //uri api
  public apiUri: string = 'http://localhost:4000';

  /* Login Section */
  //call login methods Api
  public apiUriLogin: string = this.apiUri + '/login/';

  //call login methods Api = findOne
  public apiUriLoginFindOne: string = this.apiUriLogin + 'findOne/';


  /* Test Section */
  //call tests methods API
  public apiUriTests: string = this.apiUri + '/test/';
  //call tests byUser API
  public apiUriTestsTestUser: string = this.apiUriTests + 'testUser/';
  //call test byID methods API
  public apiUriTestsTestById: string = this.apiUriTests + 'testUserById/';

  //call test byID methods API
  public apiUriTestsUpdateTestByID: string = this.apiUriTests + 'updateTestByID/';
  //login request params
  public userReqParam: string = 'user';
  public passReqParam: string = 'pass';

  //test request params
  public idReqParam: string = '_id';
  public testUser: string = 'testUser';

  //header JSON
  public headerName: string = 'Accept';
  public headerType: string = 'application/json';

  //configuration testes
  public typeTestGrammar: string = 'grammar';
  public typeTestListening: string = 'listening';
  public statusTestCompleted: string = 'completed';
  public statusTestAvailable: string = 'available';

  //global information about tests
/*   public testsbyUser: TestUser[] = []; */
  public idTest: string;

  //global configuration pagination
  //questios students
  public totQuestionsStudentPagination: number = 2;










  constructor(private http: HttpClient) { }
}
