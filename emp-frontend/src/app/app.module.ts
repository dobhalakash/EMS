import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForegtPassComponent } from './foregt-pass/foregt-pass.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    
    AddEmployeeComponent,
         UpdateEmployeeComponent,
         ShowDetailsComponent,
         AdminLoginComponent,
         ForegtPassComponent,
    
        
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,FormsModule,HomeComponent, BrowserAnimationsModule , 
    MatFormFieldModule, MatInputModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
