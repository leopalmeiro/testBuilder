import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//login model
import { Login } from '../model/login';
//auth service
import { AuthService } from './auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //create a new object login
   logins: Login[];
   login: Login;
  //create object of form
  loginForm: FormGroup;
  submitted = false;

  //contructor for build a form.
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }


  ngOnInit() {
    console.log("init");
    this.loginForm = this.formBuilder.group({
      user: [''.trim(), Validators.required],
      pass: [''.trim(), Validators.required]
    });
  }



  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log('inicio -->' + this.loginForm.value);
    this.authService.findOne(this.loginForm.value)
      .subscribe(data => {
        if (!data) {
          alert('User or Password invalid.');
        } else {

          this.login = data;
          if (this.login.type === 'student'){
                /* this.authService.userLogged = this.login;   */
                this.router.navigate(['dashboardstudents']);     
          }
        } 
      },
        error => {
          alert('error: ' + error);

        });



  }

}
