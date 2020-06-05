import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: any;
  constructor(
    private route: ActivatedRoute,
    private postservice: PostService,
    private authenticationservice: AuthenticationService
  ) { }

  ngOnInit() {
    this.blogs = this.route.snapshot.data.blogdetails.post;
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
