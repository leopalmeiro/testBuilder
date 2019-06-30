import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {



  //uri api
  public apiUri: string = 'http://localhost:4000';
  
  /* Login Section */
  //call login methods Api
  public apiUriLogin : string = this.apiUri + '/login/';

  //call login methods Api = findOne
  public apiUriLoginFindOne : string = this.apiUriLogin + 'findOne/';


  /* Test Section */
  //call tests methods API
  public apiUriTests : string = this.apiUri + '/test/';
  //call tests methods API
  public apiUriTestsTestUser : string = this.apiUriTests + 'testUser/';

  //login request params
  public userReqParam : string = 'user';
  public passReqParam : string = 'pass';


  //header JSON
  public headerName : string = 'Accept';
  public headerType : string = 'application/json';






 

  constructor() { }
}
