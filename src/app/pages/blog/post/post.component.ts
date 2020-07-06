import { PostService } from './../../../services/post.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from './../../../models/user';
import { AuthenticationService } from './../../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  commentForm: FormGroup;
  details = [];
  // details: any = {};
  relateBlog: any;
  currentUser: User;
  comment: string;
  data: any = {};
  error = '';
  submitted = false;

  constructor(private route: ActivatedRoute, private authenticationservice: AuthenticationService,
    private formBuilder: FormBuilder, private postservice: PostService) {

    this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.details = this.route.snapshot.data.details.post_details;
    this.relateBlog = this.route.snapshot.data.details.relate;
    // console.log(this.details);
    this.commentForm = this.formBuilder.group(
      {
        comment: ['', Validators.required]
      }
    );
  }
  get f() {
    return this.commentForm.controls;
  }

  addComment() {
    let date = Date.now();
    // creating the comment format
    let comment = {
      client_id: this.currentUser.id,
      comment: this.f.comment.value,
      created_at: date,
      user: {
        fname: this.currentUser.fname,
        lname: this.currentUser.lname
      }
    };

    this.details['comment'].push(comment);
    this.error = '';
    this.submitted = true;
    if (this.commentForm.invalid) {
      return;
    }
    // creating the server comment
    this.data = {
      post_id: this.details['id'],
      client_id: this.currentUser.id,
      comment: this.f.comment.value
    };
    this.postservice.sendComment(this.data)
      .subscribe( (data: any) => {
        if (data.status == true) {
          this.submitted = false;
          this.commentForm.reset();
        } else {
          this.error = data.status;
        }
      }, error => {
        this.error = error;
      });
  }

  count(item: any) {
    return _.size(item);
  }
  Image_data(item: any, type: string, nullValue: string) {
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