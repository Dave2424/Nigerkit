import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import * as _ from "lodash";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  settings: any = [];
  subscriberForm: FormGroup;
  loading = false;
  submitted = false;
  error = "";

  constructor(
    private baseservice: BaseService,
    private formBuilder: FormBuilder,
    private alert: AlertService
  ) {
    this.baseservice.getFooterDetails().subscribe((item) => {
      this.settings = item['settings'];
    });
  }

  ngOnInit() {
    this.subscriberForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }
  get f() {
    return this.subscriberForm.controls;
  }

  getSettingsValue(value) {
    let search = _.findLast(this.settings, ["name", value]);
    return search ? search.value : "";
  }

  onSubmit() {
    this.error = "";
    this.submitted = true;

    // stop here if form is invalid
    if (this.subscriberForm.invalid) {
      return;
    }
    this.loading = true;
    this.baseservice.addSubscriber(this.f.email.value).subscribe(
      (item) => {
        this.loading = false;        
        if (item.message) this.alert.infoMsg(item.message, "Notice");
        else this.alert.infoMsg(item.error, "Notice");
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
