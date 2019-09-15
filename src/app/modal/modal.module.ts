import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../login/auth.service';
import { HelperService } from '../helper/helper.service';
import { TestService } from '../services/test.service';


@NgModule({
    imports: [],
    exports: [
        CommonModule,
        FormsModule
    ],
    declarations: [],
    providers: [
        AuthService,
        HelperService,
        TestService
    ],
})
export class ModalModule { }
