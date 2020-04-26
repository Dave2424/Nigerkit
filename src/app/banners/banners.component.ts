import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  private banners: any = [];
  constructor() {
  }

  ngOnInit() {
  }

}
