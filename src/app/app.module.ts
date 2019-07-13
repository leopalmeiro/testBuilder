import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

import { HelperService } from './helper/helper.service';
import { TestService } from './services/test.service';
import { DashboardStudentsModule } from './dashboardstudents/dashboardstudent.module';

import { PrintModule } from './print/print.module';
import { DashboardStudentRoutingModule } from './dashboardstudents/dashboardstudent.routing.module';
import { PrintRoutingModule } from './print/print.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

/*     ScoreBoxComponent,
    TestContentComponent,
    TestsComponent, */

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardStudentsModule,
    PrintModule,

    AppRoutingModule,
    DashboardStudentRoutingModule,
    PrintRoutingModule



  ],
  providers: [
    AuthService,
    HelperService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
