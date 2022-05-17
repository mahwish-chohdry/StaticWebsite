import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { TokenSectionComponent } from "../token-section/token-section.component";
import axios from "axios";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"],
})
export class PaginatorComponent implements OnInit {
  selectedData: any;

  apiResponse: any;
  pagenumber: any = 0;
  constructor(
    private data: DataService,
    private TokenSection: TokenSectionComponent
  ) {}
  getPage(status) {
    if (status == "prev") {
      this.pagenumber--;
      this.submit(this.pagenumber);
    } else if (status == "next") {
      this.pagenumber++;
      this.submit(this.pagenumber);
    }
  }
  async submit(i) {
    let tenantId = 14564;
    this.pagenumber = i;
    let pageSize = 5;
    this.apiResponse = await axios
      .get(
        "https://omsapis.azurewebsites.net/api/v1/" +
          this.selectedData.title +
          "/" +
          this.selectedData.type +
          "?tenantId=" +
          tenantId +
          "&pageNumber=" +
          this.pagenumber +
          "&pageSize=" +
          pageSize
      )
      .then(function (response) {
        if (response.status == 200) {
          console.log(response);
          return response;
          // this.entriesData = response.data;
          // route.navigate(["/dashboard"]);
        }
      });
    this.data.changeTableData(this.apiResponse);
    this.TokenSection.ngOnInit();
    //evn.target.style = "rowCss";
  }
  ngOnInit(): void {
    this.data.selectedData.subscribe(
      (message) => (this.selectedData = message)
    );
  }
}
