import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HelperService } from '../helper/helper.service';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { TestUser } from '../model/testUser';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private helper: HelperService, private authService: AuthService) { }

  //find all tests by students
  public testUser(testUser: TestUser): Observable<TestUser[]>{
    
    let httpHeaders = new HttpHeaders()
      .set(this.helper.headerName, this.helper.headerType);
    let params = new HttpParams()
      .set(this.helper.userReqParam, testUser.user);


    console.log('paramnssss --> ' + params.toString());


    return this.http.get<TestUser[]>(this.helper.apiUriTestsTestUser, {
      headers: httpHeaders,
      params: params
    })
  }


 
}
