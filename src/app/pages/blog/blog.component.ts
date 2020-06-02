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
    private postservice: PostService
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
}
