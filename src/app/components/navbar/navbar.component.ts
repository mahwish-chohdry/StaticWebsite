import { Component, OnInit, OnChanges } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  boldtext1: any = "boldtext";
  name: any;
  customerList: any;
  userDetails: any = {
    firstName: "",
    lastName: "",
    customers: [
      {
        id: "00000000-0000-0000-0000-000000000000",
        customerName: "Honda",
      },
    ],
  };
  boldtext2: any;
  buttonClick(value) {
    if (value == 1) {
      this.boldtext1 = "boldtext";
      this.boldtext2 = "";
    } else if (value == 2) {
      this.boldtext1 = "";
      this.boldtext2 = "boldtext";
    }
  }
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentDetails.subscribe((message) => {
      this.userDetails = message;
      this.name = this.userDetails.firstName;
      this.customerList = this.userDetails.customers;
    });
    if (!this.name) {
      this.name = "No_User";
    }
    // this.name = this.userDetails.firstName;

    console.log(this.userDetails);
  }
}
