import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScoreBoxComponent } from './scorebox/scorebox.component';
import { DashboardStudentsComponent } from './dashboardstudents.component';

import { TestsComponent } from './tests/tests.component';


import { TestService } from '../services/test.service';
import { HelperService } from '../helper/helper.service';
import { DashboardStudentRouDatingModule } from './dashboardstudent.routing.module';
import { TestContentComponent } from './testcontent/testcontent.component';
import { AuthService } from '../login/auth.service';
import { ListtestsComponent } from './listtests/listtests.component';

@NgModule
({
    declarations: [
        DashboardStudentsComponent,
        ScoreBoxComponent,
        TestContentComponent,
        TestsComponent,
        ListtestsComponent
  
    ],
    exports: [

    ],

    imports: [
        CommonModule,
        FormsModule,
        DashboardStudentRouDatingModule

    ],
    providers: [
        AuthService,
        HelperService,
        TestService

    

      ],

    })

    
    export class DashboardStudentsModule { }
    