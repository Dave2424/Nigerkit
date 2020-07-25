import { AlertService } from './../../services/alert.service';
import { BaseService } from './../../services/base.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
// import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Event, Router, ActivatedRoute, NavigationEnd, RouterOutlet, NavigationStart } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: any;
  subscriberForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private postservice: PostService,
    private baseService: BaseService,
    private alert: AlertService,
    private authenticationservice: AuthenticationService
  ) {

    // =================== Subscribe to route events ======================//
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
    this.blogs = this.route.snapshot.data.blogdetails.post;
    this.subscriberForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }
  get f() {
    return this.subscriberForm.controls;
  }
  onSubmit() {

    this.error = "";
    this.submitted = true;

    // stop here if form is invalid
    if (this.subscriberForm.invalid) {
      return;
    }
    this.loading = true;
    this.baseService.addSubscriber(this.f.email.value)
      .subscribe((data) => {
        if (data.result) {
          this.alert.snotSimpleSuccess('Your Subscription to our daily articles was successfully. \n You can unsubscribe from mails sent to you');
          this.loading = false;
        } else {
          this.loading = false;
        }
      }, err => {
        this.error = err;
      });
  }


  // Navigation
  Previous(record) {
    this.postservice.Navigate(record.prev_page_url)
      .subscribe((data: any) => {
        this.blogs = data.post;
      });
  }
  next(record) {
    this.postservice.Navigate(record.next_page_url)
      .subscribe((data: any) => {
        this.blogs = data.post;
      });
  }
  firstPage(record) {
    this.postservice.Navigate(record.first_page_url)
      .subscribe((data: any) => {
        this.blogs = data.post;
      });
  }
  lastPage(record) {
    this.postservice.Navigate(record.last_page_url)
      .subscribe((data: any) => {
        this.blogs = data.post;
      });
  }
    // End of Navigation
  count(item: any) {
    return _.size(item);
  }
  checkValue(item: any, type: string, nullValue: string) {
    if (type === 'text') {
      if (this.count(item) === 0) {
        return nullValue;
      }
      return item;
    }

    if (type === 'avatar') {

      if (this.count(item) === 0) {
        return '/assets/images/default/avatar.jpg';
      }
      return this.authenticationservice.baseurl + item;
    }
  }
}
