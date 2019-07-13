import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PrinttestComponent } from './printtest/printtest.component';
import { PrintComponent } from './print.component';




const printRouter: Routes = [
    {path: '', component: PrintComponent, 
    children: [
        {path: 'printTestCompleted/:id', component:  PrinttestComponent   } 
    ]}



];

@NgModule({
    imports: [RouterModule.forChild(printRouter)],
    exports: [RouterModule]
})

export class PrintRoutingModule { }