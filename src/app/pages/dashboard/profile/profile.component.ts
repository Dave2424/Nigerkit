import { BaseService } from './../../../services/base.service';
import { Router } from '@angular/router';
import { AlertService } from './../../../services/alert.service';
import { Validators } from '@angular/forms';
import { AuthenticationService } from './../../../services/authentication.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { User } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  @Input() user: any;
  profileForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private baseservice: BaseService,
    private authenticationservice: AuthenticationService,
    private alert: AlertService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.profileForm = this.formBuilder.group(
      {
        id: [this.user.id, Validators.required],
        fname: [this.user.fname, Validators.required],
        lname: [this.user.lname, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        phone: [this.user.phone, [Validators.required, Validators.minLength(11)]],
        address: [this.user.address, Validators.required]
      }
    );
  }
  get f() {
    return this.profileForm.controls;
  }
  updateProfile() {
    this.error = '';
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    this.loading = true;
    this.baseservice.update(this.profileForm.value)
      .subscribe( (data) => {
        this.loading = false;
        this.submitted = false;
        this.alert.snotSimpleSuccess(data.message);
        this.updateLocalStorage(data.user);
        this.router.navigateByUrl('/dashboard');
      });
  }
  updateLocalStorage(data: any) {
    this.authenticationservice.removeUserData();
    this.authenticationservice.setUserData(data);

    // update global current user
    this.authenticationservice.removeUser();
    this.authenticationservice.setUser(data);
  }

}
