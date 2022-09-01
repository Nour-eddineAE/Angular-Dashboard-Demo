import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../authentication.scss'],
})
export class ResetPasswordComponent implements OnInit {
  authenticationFormGroup!: FormGroup;
  innerWidth: number = window.innerWidth;
  resetRequested: boolean = false;
  tokenMatched: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.authenticationFormGroup = this.formBuilder.group({
      email: this.formBuilder.control(''),
      token: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      passwordConfirmation: this.formBuilder.control(''),
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  getClass(): string {
    return this.innerWidth < 845 ? 'form-container-md' : 'form-container';
  }

  requestPasswordReset() {
    if (this.authenticationFormGroup.value.email != (null || '')) {
      this.resetRequested = true;
    }
  }

  handleTokenMatched() {
    this.tokenMatched = true;
    // returns true if the token typed matches the one setInterval, false otherwise
  }

  registerNewPassword() {
    //TODO: add the new password to the data base
    this.tokenMatched = false;
    this.resetRequested = false;
    this.router.navigateByUrl('/authentication/login');
  }
}
