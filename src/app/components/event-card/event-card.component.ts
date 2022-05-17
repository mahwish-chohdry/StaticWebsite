import { createNgModule } from "@angular/compiler/src/core";
import { Component, OnInit, Input } from "@angular/core";
import axios from "axios";
import { DataService } from "src/app/services/data.service";
import { TokenSectionComponent } from "../token-section/token-section.component";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.css"],
  providers: [TokenSectionComponent],
})
export class EventCardComponent implements OnInit {
  @Input() cardData: any;
  cardTitle: any;
  dataArray: any;
  apiResponse: any;
  cardIndex: any = "";
  count: any = 0;
  selectedData: any = {
    type: "",
    title: "",
  };

  cardClick() {
    this.count++;
    if (this.cardIndex == "") {
      this.cardIndex = "SelectedCardCss";
    }
  }
  resetCss() {
    console.log("change occured");
    if (this.data.currentStyle) {
      this.cardIndex = "";
    }

    // if (this.cardIndex == "SelectedCardCss") {
    this.cardIndex = "";
    // }
  }
  constructor(
    private data: DataService,
    private TokenSection: TokenSectionComponent
  ) {}
  btnStyle;
  selectedRow: any;

  async submit(title, type, i) {
    this.selectedRow = i;

    if (type == "EventsFailed") {
      type = "failed";
    } else if (type == "EventsGenerated") {
      type = "generated";
    }
    this.selectedData.title = title;
    this.selectedData.type = type;
    this.data.setSelectedData(this.selectedData);
    let tenantId = 14564;
    let pagenumber = 1;
    let pageSize = 5;
    this.apiResponse = await axios
      .get(
        "https://omsapis.azurewebsites.net/api/v1/" +
          title +
          "/" +
          type +
          "?tenantId=" +
          tenantId +
          "&pageNumber=" +
          pagenumber +
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
  ngOnChanges() {
    this.cardIndex = "";
  }
  getCss() {
    return this.cardIndex;
  }
  statusString(status) {
    let result = status.split(/(?=[A-Z])/);
    let resultString = "";
    result.forEach((element) => {
      resultString += element;
      resultString += " ";
    });
    return resultString;
  }
  ngOnInit(): void {
    this.cardTitle = Object.keys(this.cardData);
    this.dataArray = this.cardData[this.cardTitle[0]];
    if (this.data.currentStyle) {
      this.cardIndex = "";
    }
  }
}
