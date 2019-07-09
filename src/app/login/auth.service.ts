import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login } from '../model/login';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;

  constructor(private http: HttpClient, private helper: HelperService) { 

    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public findOne(login: Login): Observable<Login> {
    //header json
    let httpHeaders = new HttpHeaders()
      .set('Accept', 'application/json');


      let params = new HttpParams()
      .set(this.helper.userReqParam, login.user)
      .set(this.helper.passReqParam, login.pass);


    console.log('paramnssss --> ' + params.toString());


    return this.http.get<Login>(this.helper.apiUriLoginFindOne, {
      headers: httpHeaders,
      params: params
    })
  
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }

      return user;

    }));
  }
  
  public get currentUserValue(): Login {
    return this.currentUserSubject.value;
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}

}
