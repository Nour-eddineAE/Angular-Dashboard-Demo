import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppUser } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  newUserFormGroup!: FormGroup;
  innerWidth: number = window.innerWidth;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserFormGroup = this.formBuilder.group({
      email: this.formBuilder.control(''),
      username: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  handleCreateAccount() {
    let id = UUID.UUID();
    let email = this.newUserFormGroup.value.email;
    let username = this.newUserFormGroup.value.username;
    let password = this.newUserFormGroup.value.password;
    let roles = ['user'];
    let user: AppUser = {
      userId: id,
      email: email,
      username: username,
      password: password,
      roles: roles,
    };
    this.authenticationService.addUser(user);
    this.router.navigateByUrl('/authentication/login');
  }
  getClass(): string {
    return this.innerWidth < 845 ? 'form-container-md' : 'form-container';
  }
}
