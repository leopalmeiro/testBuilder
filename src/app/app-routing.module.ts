import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardStudentsComponent } from './dashboard-students/dashboard-students.component';

const routes: Routes = [
/*   { path: '', component: HomeComponent, canActivate: [AuthGuard] }, */
  {path: 'login', component: LoginComponent },
  {path: 'dashboard-students', component: DashboardStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
