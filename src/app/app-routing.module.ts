import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
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

const routes: Routes = [
  {path: 'predebates', component: PagePredebatesComponent},
  {path: 'programme-pre-events', component: PagePreEventsProgramComponent},
  {path: 'programme-day-1', component: PageDay1ProgramComponent},
  {path: 'programme-day-2', component: PageDay2ProgramComponent},
  {path: 'programme-day-3', component: PageDay3ProgramComponent},
  {path: 'programme-day-4', component: PageDay4ProgramComponent},
  {path: 'keynotes-speakers', component: PageKeynotesSpeakersComponent},
  {path: 'panels-and-roundtables', component: PagePanelsAndRoundtablesComponent},
  {path: 'preconf-workshop', component: PagePreconfWorkshopComponent},
  {path: 'preconf-climate-debate', component: PagePreconfClimateDebateComponent},
  {path: 'post-conf-workshop', component: PageProstConfWorkshopComponent},
  {path: 'submit-work/call-for-panels', component: PageCallForPanelsComponent},
  {path: 'submit-work/call-for-abstract', component: PageCallForAbstractComponent},
  {path: 'in-person/venues', component: PageAttendanceInPersonComponent},
  {path: 'in-person/accommodation', component: PageAttendanceInPersonAccommodationComponent},
  {path: 'in-person/pre-and-post-conference-tours', component: PageInPersonPrePostToursComponent},
  {path: 'in-person/travel-and-visa', component: PageInPersonTravelVisaComponent},
  {path: 'attendance/as-exhibitor', component: PageAttendanceAsExhibitorComponent},
  {path: 'register', component: PageRegisterComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
