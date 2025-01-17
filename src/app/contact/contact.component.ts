import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatProgressBarModule, MatSnackBarModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      guestName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      messageTitle: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.isLoading = true;
      const formData = this.contactForm.value;
      try {
        const response = await this.http.post(`https://api.honghuannguyen.click/contact`, formData, { headers: { 'Content-Type': 'application/json' } }).toPromise();
        if (!response) {
          console.log(response);
          throw new Error('Failed to send email. Please try again.');
        }
        this.isLoading = false;
        this.snackBar.open('Email sent successfully!', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
        this.contactForm.reset();
      } catch (err) {
        console.log(err);
        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Failed to send email. Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }, 1000);
      }
    } else {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.snackBar.open('Please fill out all fields correctly.', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }, 1000);
    }
  }
}
