import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';





@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
  ,
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent //implements OnInit//
{

  constructor(
    private employeeService: EmployeeService,
    private router: Router,

  ) {

  }




 
 

  submitform!: NgForm;
  private baseURL = "http://localhost:8080/api/v1/employees";
  employee: Employee = new Employee();
  




  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.employee);


    this.saveEmployee();
  }


}









