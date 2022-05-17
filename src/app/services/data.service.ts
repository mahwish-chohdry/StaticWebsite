import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}
  private getData = new BehaviorSubject("");
  currentData = this.getData.asObservable();
  private getSelectedData = new BehaviorSubject("");
  selectedData = this.getSelectedData.asObservable();
  private getStyle = new BehaviorSubject("");
  currentStyle = this.getStyle.asObservable();
  private getUserDetails = new BehaviorSubject("");
  currentDetails = this.getUserDetails.asObservable();
  changeStyle(data: any) {
    this.getStyle.next(data);
  }
  changeTableData(data: any) {
    this.getData.next(data);
  }
  setSelectedData(data: any) {
    this.getSelectedData.next(data);
  }
  setUserDetails(data: any) {
    this.getUserDetails.next(data);
  }
}
