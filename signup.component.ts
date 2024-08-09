
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  
  // Method triggered on form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      
      // Logic to handle sign-up (e.g., send data to a backend)
      console.log('Form Submitted!', this.email, this.password);
      // Reset form after submission
      form.reset();
    } else {
      alert("Please fill in all fields correctly.");
    }
  }
}
