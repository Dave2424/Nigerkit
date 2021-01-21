import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skeletonloader",
  templateUrl: "./skeletonloader.component.html",
  styleUrls: ["./skeletonloader.component.css"],
})
export class SkeletonloaderComponent implements OnInit {
  data = [1, 2, 3, 4];
  constructor() {}

  ngOnInit() {}
}
