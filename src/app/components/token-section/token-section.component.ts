import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { TokenListComponent } from "../token-list/token-list.component";
import axios from "axios";
import { getLocaleDateFormat } from "@angular/common";

@Component({
  selector: "app-token-section",
  templateUrl: "./token-section.component.html",
  styleUrls: ["./token-section.component.css"],
  providers: [TokenListComponent],
})
export class TokenSectionComponent implements OnInit {
  constructor(private data: DataService) {}
  changeTableData: any;
  tableHeadings: any;
  selectedData: any;

  tableTitle() {
    if (this.selectedData) {
      return this.selectedData.title + " " + this.selectedData.type;
    } else {
      return "Invoive Due";
    }
  }
  async gatData() {
    let tenantId = 14564;
    let pagenumber = 1;
    let pageSize = 5;
    this.changeTableData = await axios
      .get(
        "https://omsapis.azurewebsites.net/api/v1/" +
          "/Invoice/due?tenantId=" +
          tenantId +
          "&pageNumber=" +
          pagenumber +
          "&pageSize=" +
          pageSize
      )
      .then(function (response) {
        if (response.status == 200) {
          return response;
        }
      });
  }
  async ngOnInit() {
    if (!this.changeTableData) {
      this.gatData();
    }
    this.data.currentData.subscribe(
      (message) => (this.changeTableData = message)
    );
    this.data.selectedData.subscribe(
      (message) => (this.selectedData = message)
    );

    if (this.changeTableData) {
      console.log(this.changeTableData.data.data);
      this.tableHeadings = Object.keys(this.changeTableData.data.data.data[0]);
      // this.tokenList.ngOnInit();
    }
  }
}
