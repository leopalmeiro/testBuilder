import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
/*   { path: '', component: HomeComponent, canActivate: [AuthGuard] }, */
  {path:  '', redirectTo:  'login', pathMatch:  'full'},
  {path: 'login', component: LoginComponent },

  {path: 'dashboardstudents', loadChildren: () => import('./dashboardstudents/dashboardstudent.module').then(d => d.DashboardStudentsModule)},
  {path: 'print', loadChildren: () => import('./print/print.module').then(p => p.PrintModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
