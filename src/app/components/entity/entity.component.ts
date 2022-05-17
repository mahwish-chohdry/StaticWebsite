import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-entity",
  templateUrl: "./entity.component.html",
  styleUrls: ["./entity.component.css"],
})
export class EntityComponent implements OnInit {
  @Input() cardData: any;
  cardTitle: any;
  dataArray: any;
  constructor() {}
  barValue(title) {
    return this.cardData[this.cardTitle[0]][title];
  }
  ngOnInit(): void {
    this.cardTitle = Object.keys(this.cardData);
    this.dataArray = Object.keys(this.cardData[this.cardTitle[0]]);
  }
}
