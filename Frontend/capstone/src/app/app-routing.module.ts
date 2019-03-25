import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './employer/employer.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { QuestionForumComponent } from './question-forum/question-forum.component';

const routes: Routes = [ 
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: '/home/employer', component: EmployerComponent},
{path: '/home/job_listing', component: JobListingComponent},
{path: '/home/question_forum', component: QuestionForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
