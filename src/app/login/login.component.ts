import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // For ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  private _password: string = ''; // Use private variable with setter/getter
  captcha: string = ''; // User’s CAPTCHA input
  captchaQuestion: string = '';
  captchaAnswer: string = '';
  errorMessage: string = ''; // For submission errors (e.g., empty fields)
  passwordError: string = ''; // For real-time password validation
  usernameError: string = ''; // For username validation
  captchaError: string = ''; // For CAPTCHA validation

  ngOnInit() {
    this.generateCaptcha(); // Generate CAPTCHA when the component initializes
  }

  // Getter and setter for password to enable real-time validation
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
    this.checkPassword(); // Check password length in real-time
  }

  generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number 1-10
    this.captchaQuestion = `What is ${num1} + ${num2}?`;
    this.captchaAnswer = (num1 + num2).toString(); // Store the correct answer as a string
  }

  checkPassword() {
    if (this._password.length < 9) {
      this.passwordError = 'Password must be at least 9 characters long.';
    } else {
      this.passwordError = ''; // Clear error when length is 9 or more
    }
  }

  onSubmit() {
    this.errorMessage = ''; // Clear previous submission error
    this.usernameError = ''; // Clear username error
    this.passwordError = ''; // Clear password error
    this.captchaError = ''; // Clear CAPTCHA error

    if (this.username && this._password && this.captcha) {
      // Check username (email) for @
      if (!this.username.includes('@')) {
        this.usernameError = 'Username must contain an @ symbol.';
        return; // Prevent login if username is invalid
      }

      // Check password length (must be 9 or more characters)—use _password
      if (this._password.length < 9) {
        this.passwordError = 'Password must be at least 9 characters long.';
        return; // Prevent login if password is invalid
      }

      // Check CAPTCHA
      if (this.captcha.trim().toLowerCase() !== this.captchaAnswer.toLowerCase()) {
        this.captchaError = 'Invalid CAPTCHA answer. Please try again.';
        this.generateCaptcha(); // Generate a new CAPTCHA on failure
        return; // Prevent login if CAPTCHA is wrong
      }

      // If all validations pass
      console.log('Login attempted with:', this.username, this._password, this.captcha);
      this.generateCaptcha(); // Generate a new CAPTCHA after successful submission
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}