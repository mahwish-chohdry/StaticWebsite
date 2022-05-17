import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { DataService } from "./services/data.service";
import { AuthGuard } from "./auth.guard";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
// import { NgxSpinnerModule } from "ngx-spinner";
import { CustomHttpInterceptorService } from "./services/custom-http-interceptor.service";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { RegistrationComponent } from "./components/registration/registration.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatOptionModule } from "@angular/material/core";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { TokenListComponent } from "./components/token-list/token-list.component";
import { AriaSectionComponent } from "./components/aria-section/aria-section.component";
import { TokenSectionComponent } from "./components/token-section/token-section.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { EntityComponent } from "./components/entity/entity.component";
import { EventCardComponent } from "./components/event-card/event-card.component";
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, "./assets/i18/", ".json");
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    NavbarComponent,
    HeroSectionComponent,
    TokenListComponent,
    AriaSectionComponent,
    TokenSectionComponent,
    PaginatorComponent,
    EntityComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatOptionModule,
    // NgxSpinnerModule,
    MatListModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    ApiService,
    DataService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
