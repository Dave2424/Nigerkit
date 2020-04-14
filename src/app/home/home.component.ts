import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {BaseService} from "../services/base.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(private authenticationservice: AuthenticationService,
            private baseservice: BaseService) { }

  ngOnInit() {
    this.data = this.baseservice.all_product().subscribe(data => console.log(data));
        // .subscribe(data => {
        //   console.log(data);
        // }, error => {
        //   console.log(error.responseText);
        // })
  }

}
