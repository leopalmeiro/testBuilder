import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login } from '../model/login';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogged: Login;


  constructor(private http: HttpClient, private helper: HelperService) { }

  public findOne(login: Login): Observable<Login> {
    //header json
    let httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json');

/*       let body = JSON.stringify(login);
      console.log('body json -> ' + body); */
      let params = new HttpParams()
      .set(this.helper.userReqParam, login.user)
      .set(this.helper.passReqParam, login.pass);


    console.log('paramnssss --> ' + params.toString());


    return this.http.get<Login>(this.helper.apiUriLoginFindOne, {
      headers: httpHeaders,
      params: params
    })
  
    .pipe(
      tap(console.log)
    );

  }


}
