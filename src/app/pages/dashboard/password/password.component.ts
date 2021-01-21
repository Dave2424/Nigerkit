import { Router } from '@angular/router';
import { AlertService } from './../../../services/alert.service';
import { first } from 'rxjs/operators';
import { User } from './../../../models/user';
import { BaseService } from './../../../services/base.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MustMatch } from '../../../helpers/must-match';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  currentUser:User;
  @Output() back = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private baseservice: BaseService,
    private alert: AlertService,
    private router: Router,
    private authenticationservice: AuthenticationService) {
    this.authenticationservice.currentUser.subscribe(x =>   this.currentUser = x);
     }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      opassword: ['', Validators.required],
      npassword: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required]
    },
      { validator: MustMatch('npassword', 'cpassword') }
      );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.passwordForm.controls;
  }

  ChangePassword() {
    this.error = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }
    this.loading = true;
    // this.authenticationservice.
    this.baseservice.updateUserData(this.passwordForm.value, this.currentUser.id)
      .pipe(first())
      .subscribe(
        data => {
          // Update user data
          if (data.status) {
            this.alert.successMsg(data.message, 'Account Update Successful');
            this.loading = false;
            this.sendback();
          } else {
            this.alert.errorMsg(data.message, 'There was an error');
            this.loading = false;
            this.error = data.message;
          }
        },
        error => {
          this.alert.errorMsg('Unable to update account.', 'There was an error');
          this.loading = false;
          this.error = 'Unable to update account.';
        });
  }
  sendback(){
    this.back.emit('back');
  }

}
