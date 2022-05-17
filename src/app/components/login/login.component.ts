import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginRequest } from "./LoginRequest";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import axios from "axios";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [NavbarComponent],
})
export class LoginComponent implements OnInit {
  loginRequest: LoginRequest;
  loginForm: FormGroup;
  userDetails: any = {
    firstName: "",
    lastName: "",
    customers: [],
  };

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private authenticationService: AuthenticationService,
    private navbar: NavbarComponent,
    public router: Router
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {
    // this.authenticationService.navigateToDashboardPageIfLoggedIn();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async login() {
    if (this.loginForm.invalid) {
      return;
    }
    let respo = this.userDetails;
    let route = this.router;
    await axios
      .post("https://omsapis.azurewebsites.net/api/v1/authorization/signin", {
        email: this.loginForm.value.username,
        password: this.loginForm.value.password,
      })
      .then(function (response) {
        if (response.status == 200) {
          respo.firstName = response.data.data.firstName;
          respo.lastName = response.data.data.lastName;
          respo.customers = response.data.data.customers;
          route.navigate(["/dashboard"]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    this.data.setUserDetails(respo);

    this.navbar.ngOnInit();

    // this.authenticationService.login(this.loginRequest);
    // this.loginForm.reset();
  }

  invalidUsername() {
    return (
      this.loginForm.get("username").hasError("required") &&
      this.loginForm.get("username").dirty
    );
  }

  invalidPassword() {
    return (
      this.loginForm.get("password").hasError("required") &&
      this.loginForm.get("password").dirty
    );
  }

  isDisableLoginButton() {
    return (
      this.loginForm.invalid || this.invalidUsername() || this.invalidPassword()
    );
  }
}
