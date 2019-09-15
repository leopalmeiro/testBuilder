import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../login/auth.service';
import { HelperService } from '../helper/helper.service';
import { TestService } from '../services/test.service';
import { PrinttestComponent } from './printtest/printtest.component';
import { PrintRoutingModule } from './print.routing.module';
import { PrintComponent } from './print.component';





@NgModule
({
    declarations: [
    PrinttestComponent,
    PrintComponent
  ],
    exports: [

    ],

    imports: [
        CommonModule,
        FormsModule,

        PrintRoutingModule
        


    ],
    providers: [
        AuthService,
        HelperService,
        TestService

    

      ],

    })

    
    export class PrintModule { }