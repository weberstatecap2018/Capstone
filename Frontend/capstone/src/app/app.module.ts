import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionForumComponent } from './question-forum/question-forum.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { EmployerComponent } from './employer/employer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionForumComponent,
    JobListingComponent,
    EmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
