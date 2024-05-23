import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


import { EmployeeComponent } from './employee.component';
import { MessageService } from 'primeng/api';
import { AddEditEmployeeModule } from "./add-edit-employee/add-edit-employee.module";

@NgModule({
    declarations: [
        EmployeeComponent
    ],
    exports: [
        EmployeeComponent
    ],
    providers: [MessageService],
    imports: [
        CommonModule,
        HttpClientModule,
        TableModule,
        ButtonModule,
        ToastModule,
        AddEditEmployeeModule
    ]
})
export class EmployeeModule { }
