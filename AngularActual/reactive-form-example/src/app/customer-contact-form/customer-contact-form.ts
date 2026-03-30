import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-customer-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // Add other Material modules here as needed
  ],
  templateUrl: './customer-contact-form.html',
  styleUrls: ['./customer-contact-form.css']
})
export class CustomerContactFormComponent {
  form: FormGroup;

  // The 'private' keyword here makes 'fb' a property of the class,
  // accessible throughout the component, not just in the constructor.
  constructor(private fb: FormBuilder) {
    // in customer-contact-form.component.ts
  this.form = fb.group({
    firstName: ['John', Validators.required],
    lastName: ['Doe', Validators.required],
    email: ['john.doe@example.com', [Validators.required, Validators.email]],
      // The FormArray object:
      phoneNumbers: this.fb.array([
        this.fb.group({
          alias: ['Home'],
          number: ['555-555-5555']
        })
      ]),
      address: this.fb.group({
        street: ['123 Main St.'],
        city: ['Salt Lake City'],
        state: ['UT'],
        zip: ['84001']
      })
    });
  }
  // In your component class
  reset(): void {
    this.form.controls['firstName'].setValue('');
    this.form.controls['lastName'].setValue('');
  }

  // In your component class
  onSubmit(): void {
    // The form's value is available via the 'value' property
    console.log('Submitted form value:', this.form.value);
  }

  // In your component class
  fillDefaultAddress(): void {
    this.form.patchValue({
      address: {
        street: '456 Default St',
        city: 'Defaultolopolis',
        state: 'CA',
        zip: '90000',
      }
    });
  }

  // In your component class
  get phoneNumbers() {
    return this.form.get('phoneNumbers') as FormArray;
  }

  // In your component class
  addPhone(): void {
    this.phoneNumbers.push(this.fb.group({
      alias: [''],
      number: ['']
    }));
  }
}