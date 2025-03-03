import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log('Client Data:', this.clientForm.value);
      // Perform API call to save the client (if applicable)
      alert('Client added successfully!');
      this.router.navigate(['/clients']); // Redirect to clients list
    }
  }

  onCancel(): void {
    this.router.navigate(['/clients']); // Navigate back without saving
  }
}
