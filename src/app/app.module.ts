import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardStudentsComponent } from './dashboard-students/dashboard-students.component';
import { AuthService } from './login/auth.service';
import { ScoreBoxComponent } from './dashboard-students/score-box/score-box.component';
import { TestContentComponent } from './dashboard-students/test-content/test-content.component';
import { TestsComponent } from './tests/tests.component';
import { HelperService } from './helper/helper.service';
import { TestService } from './services/test.service';
/* import { PaginationModule } from 'ngx-bootstrap/pagination'; */


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardStudentsComponent,
    ScoreBoxComponent,
    TestContentComponent,
    TestsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
/*     PaginationModule.forRoot() */
  ],
  providers: [
    AuthService,
    HelperService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
