import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardStudentsComponent } from './dashboardstudents.component';
import { TestsComponent } from './tests/tests.component';
import { TestContentComponent } from './testcontent/testcontent.component';
import { ScoreBoxComponent } from './scorebox/scorebox.component';



const dashboardStudentRoutes: Routes = [
    { path: '', component: DashboardStudentsComponent , children :[
        { path: 'listTestsUsers', component: TestContentComponent},
        { path: 'listScoreBoxUsers', component: ScoreBoxComponent    },
        { path: 'testStudent/:id', component: TestsComponent  }

    ]}




];

@NgModule({
    imports: [RouterModule.forChild(dashboardStudentRoutes)],
    exports: [RouterModule]
})

export class DashboardStudentRouDatingModule { }