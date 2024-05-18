import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.admin.username === 'Rajputakash@gmail.com' && this.admin.password === 'Akash@123') {
      // Redirect to the show-all-employees route
      this.router.navigate(['/show-all-employees']);
    } else {
      // Invalid credentials, handle appropriately
      console.error('Invalid credentials');
    }
  }
}
