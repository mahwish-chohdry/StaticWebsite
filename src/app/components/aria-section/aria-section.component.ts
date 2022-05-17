import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-aria-section",
  templateUrl: "./aria-section.component.html",
  styleUrls: ["./aria-section.component.css"],
})
export class AriaSectionComponent implements OnInit {
  @Input() entriesData: any;

  constructor() {}
  title(card) {
    let cardtitle = Object.keys(card);
    if (cardtitle[0] == "Entities" || cardtitle[0] == "Event") {
      return false;
    } else {
      return true;
    }
  }
  forEntity(card) {
    let cardtitle = Object.keys(card);
    if (cardtitle[0] == "Entities") {
      return true;
    } else {
      return false;
    }
  }
  forEvent(card) {
    let cardtitle = Object.keys(card);
    if (cardtitle[0] == "Event") {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit(): void {}
}
