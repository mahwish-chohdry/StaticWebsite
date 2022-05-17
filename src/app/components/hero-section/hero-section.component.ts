import { Component, OnInit, Input } from "@angular/core";
import axios from "axios";
import { DataService } from "src/app/services/data.service";
import { TokenSectionComponent } from "../token-section/token-section.component";
import { EventCardComponent } from "../event-card/event-card.component";

@Component({
  selector: "app-hero-section",
  templateUrl: "./hero-section.component.html",
  styleUrls: ["./hero-section.component.css"],
  providers: [TokenSectionComponent, EventCardComponent],
})
export class HeroSectionComponent implements OnInit {
  @Input() cardData: any;
  cardTitle: any;
  dataArray: any;
  apiResponse: any;
  cardIndex: any = "";
  selectedData: any = {
    type: "",
    title: "",
  };
  cardClick() {
    this.data.changeStyle(true);
    if (this.cardIndex == "") {
      this.cardIndex = "SelectedCardCss";
      this.eventcard.resetCss();
    }
  }
  constructor(
    private data: DataService,
    private TokenSection: TokenSectionComponent,
    private eventcard: EventCardComponent
  ) {}
  btnStyle;
  selectedRow: any;
  amounttext(amount) {
    let million;
    let BelowM;
    if (amount >= 100000) {
      return amount / 1000000 + "M$";
    }
  }
  async submit(title, type, i) {
    this.selectedRow = i;
    if (type == "ExpectedTomorrow") {
      type = "expected";
    } else if (type == "DueToday") {
      type = "due";
    } else if (type == "SentToCustomer") {
      type = "expected";
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
  }
}
