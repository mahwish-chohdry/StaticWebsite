import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import axios from "axios";
// import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  loaderFlag: any = "displayLoader";
  loaderCSS: any = "loader";
  constructor(
    private authenticationService: AuthenticationService // private SpinnerService: NgxSpinnerService
  ) {
    // this.SpinnerService.show();
    this.getData();
  }
  entriesData: any;
  async getData() {
    let tenantId = 1256247;
    // let sService = this.SpinnerService;
    this.entriesData = await axios
      .get(
        "https://omsapis.azurewebsites.net/api/v1/report/getinvoicereconciliationreport?tenantId=" +
          tenantId
      )
      .then(function (response) {
        if (response.status == 200) {
          return response.data.data;
          // sService.hide();
          // this.entriesData = response.data;
          // route.navigate(["/dashboard"]);
        }
      });
    this.loaderCSS = "";
    this.loaderFlag = "";
  }
  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
