import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        SharedModule,
        SidenavRoutingModule,
        FormsModule,
        
    ],
    exports: []
})
export class SidenavModule { }
