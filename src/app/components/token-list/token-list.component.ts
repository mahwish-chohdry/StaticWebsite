import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-token-list",
  templateUrl: "./token-list.component.html",
  styleUrls: ["./token-list.component.css"],
})
export class TokenListComponent implements OnInit {
  @Input() tableData: any;
  tableHeading: any;
  tableKeys: any;
  displayData: any;
  constructor() {}
  ngOnChanges(): void {
    if (this.tableData) {
      // console.log(this.tableData.data.data.data[0]);
      this.tableHeading = this.tableData.data.data.headers;
      this.tableKeys = Object.keys(this.tableData.data.data.data[0]);
      this.displayData = this.tableData.data.data.data;
    }
  }
  expoertToCsv() {
    if (this.tableData) {
      this.DownloadJSON2CSV(this.tableData.data.data.data);
    }
  }
  ngOnInit(): void {}
  DownloadJSON2CSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;

    var str = "";

    for (var i = 0; i < array.length; i++) {
      var line = "";

      for (var index in array[i]) {
        line += array[i][index] + ",";
      }

      // Here is an example where you would wrap the values in double quotes
      // for (var index in array[i]) {
      //    line += '"' + array[i][index] + '",';
      // }

      line.slice(0, line.length - 1);

      str += line + "\r\n";
    }
    window.open("data:text/csv;charset=utf-8," + escape(str));
  }
}
