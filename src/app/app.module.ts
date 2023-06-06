import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeCarousselComponent } from './home-caroussel/home-caroussel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantDatesComponent } from './important-dates/important-dates.component';
import { FooterComponent } from './footer/footer.component';
import { PagePredebatesComponent } from './page-predebates/page-predebates.component';
import { PagePreEventsProgramComponent } from './page-pre-events-program/page-pre-events-program.component';
import { PageDay1ProgramComponent } from './page-day1-program/page-day1-program.component';
import { PageDay2ProgramComponent } from './page-day2-program/page-day2-program.component';
import { PageDay3ProgramComponent } from './page-day3-program/page-day3-program.component';
import { PageDay4ProgramComponent } from './page-day4-program/page-day4-program.component';
import { PageKeynotesSpeakersComponent } from './page-keynotes-speakers/page-keynotes-speakers.component';
import { PagePanelsAndRoundtablesComponent } from './page-panels-and-roundtables/page-panels-and-roundtables.component';
import { PagePreconfWorkshopComponent } from './page-preconf-workshop/page-preconf-workshop.component';
import { PagePreconfClimateDebateComponent } from './page-preconf-climate-debate/page-preconf-climate-debate.component';
import { PageProstConfWorkshopComponent } from './page-prost-conf-workshop/page-prost-conf-workshop.component';
import { PageCallForPanelsComponent } from './page-call-for-panels/page-call-for-panels.component';
import { PageCallForAbstractComponent } from './page-call-for-abstract/page-call-for-abstract.component';
import { PageAttendanceInPersonComponent } from './page-attendance-in-person/page-attendance-in-person.component';
import { PageAttendanceAsExhibitorComponent } from './page-attendance-as-exhibitor/page-attendance-as-exhibitor.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageAttendanceInPersonAccommodationComponent } from './page-attendance-in-person-accommodation/page-attendance-in-person-accommodation.component';
import { PageInPersonPrePostToursComponent } from './page-in-person-pre-post-tours/page-in-person-pre-post-tours.component';
import { PageInPersonTravelVisaComponent } from './page-in-person-travel-visa/page-in-person-travel-visa.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeCarousselComponent,
    HomePageComponent,
    ImportantDatesComponent,
    FooterComponent,
    PagePredebatesComponent,
    PagePreEventsProgramComponent,
    PageDay1ProgramComponent,
    PageDay2ProgramComponent,
    PageDay3ProgramComponent,
    PageDay4ProgramComponent,
    PageKeynotesSpeakersComponent,
    PagePanelsAndRoundtablesComponent,
    PagePreconfWorkshopComponent,
    PagePreconfClimateDebateComponent,
    PageProstConfWorkshopComponent,
    PageCallForPanelsComponent,
    PageCallForAbstractComponent,
    PageAttendanceInPersonComponent,
    PageAttendanceAsExhibitorComponent,
    PageRegisterComponent,
    PageAttendanceInPersonAccommodationComponent,
    PageInPersonPrePostToursComponent,
    PageInPersonTravelVisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
