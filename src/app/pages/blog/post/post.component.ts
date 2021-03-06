import { AlertService } from "./../../../services/alert.service";
import { BaseService } from "./../../../services/base.service";
import { PostService } from "./../../../services/post.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { User } from "./../../../models/user";
import { AuthenticationService } from "./../../../services/authentication.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Title, Meta, } from "@angular/platform-browser";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  commentForm: FormGroup;
  details = [];
  // details: any = {};
  relateBlog: any;
  latestBlog: any;
  currentUser: User;
  comment: string;
  data: any = {};
  error = "";
  submitted = false;

  subscriberForm: FormGroup;
  loadinng = false;
  submitteed = false;
  errror = "";
  subEmailText = "";

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private alert: AlertService,
    private baseService: BaseService,
    private authenticationservice: AuthenticationService,
    private formBuilder: FormBuilder,
    private postservice: PostService
  ) {
    this.authenticationservice.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit() {
    this.details = this.route.snapshot.data.details.post_details;
    this.relateBlog = this.route.snapshot.data.details.relate;
    this.latestBlog = this.route.snapshot.data.details.latest;
    // console.log(this.latestBlog);
    this.commentForm = this.formBuilder.group({
      comment: ["", Validators.required],
    });
    this.subscriberForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });

    this.title.setTitle(this.details['title']);
    this.meta.addTag({ name: "description", content: this.details['description'] });
  }
  get f() {
    return this.commentForm.controls;
  }
  get ff() {
    return this.subscriberForm.controls;
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
        lname: this.currentUser.lname,
      },
    };

    this.details["comment"].push(comment);
    this.error = "";
    this.submitted = true;
    if (this.commentForm.invalid) {
      return;
    }
    // creating the server comment
    this.data = {
      post_id: this.details["id"],
      client_id: this.currentUser.id,
      comment: this.f.comment.value,
    };
    this.postservice.sendComment(this.data).subscribe(
      (data: any) => {
        if (data.status == true) {
          this.submitted = false;
          this.commentForm.reset();
        } else {
          this.error = data.status;
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }
  onSubmit() {
    this.errror = "";
    this.submitteed = true;

    // stop here if form is invalid
    if (this.subscriberForm.invalid) {
      return;
    }
    this.loadinng = true;
    this.baseService.addSubscriber(this.ff.email.value).subscribe(
      (data) => {
        if (data.result) {
          this.alert.snotSimpleSuccess(
            "Your Subscription to our daily articles was successfully. \n You can unsubscribe from mails sent to you"
          );
          this.loadinng = false;
        } else {
          this.loadinng = false;
        }
      },
      (err) => {
        this.error = err;
      }
    );
  }

  count(item: any) {
    return _.size(item);
  }
  Image_data(item: any, type: string, nullValue: string) {
    if (type === "text") {
      if (this.count(item) === 0) {
        return nullValue;
      }
      return item;
    }

    if (type === "avatar") {
      if (this.count(item) === 0) {
        return "/assets/images/default/avatar.jpg";
      }
      return this.authenticationservice.baseurl + item;
    }
  }
}
