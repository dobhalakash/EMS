import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ForegtPassComponent } from './foregt-pass/foregt-pass.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

  

const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: AddEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'details-of-employee/:id',component:ShowDetailsComponent},
  {path:'foregt-pass',component:ForegtPassComponent},
  {path:'home',component:HomeComponent},
  
  {path:'login',component:AdminLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
