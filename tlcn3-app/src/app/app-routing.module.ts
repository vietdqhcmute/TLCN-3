import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfilePageComponent } from "./app-profile/profile-page.component";
import { AppAboutComponent } from "./about/about.component";
import { EditResumeComponent } from "./edit-resume/edit-resume.component";

import { ResolverService } from "./services/resolver.service";
import { AuthGuard } from "./services/auth.guard";
import { FirstPageComponent } from "./first-page/first-page.component";
import { AdminComponent } from "./page-admin/admin.component";
import { AdminGuard } from "./services/admin.guard";
import { AdminUserManagerComponent } from "./page-admin/admin-user-manager/admin-user-manager.component";
import { AdminDashboardComponent } from "./page-admin/admin-dashboard/admin-dashboard.component";
import { AdminNotificationComponent } from "./page-admin/admin-notification/admin-notification.component";
import { SignUpComponent } from "./login/sign-up/sign-up.component";
import { RecruiterComponent } from "./recruiter/recruiter.component";
import { AllJobComponent } from './all-job/all-job.component';
import { SignUpRecruiterComponent } from "./login/sign-up-recruiter/sign-up-recruiter.component";
import { RecruiterCreatePostComponent } from "./recruiter/recruiter-create-post/recruiter-create-post.component";
import { RecruiterReviewComponent } from "./recruiter/recruiter-review/recruiter-review.component";

const routes: Routes = [
  { path: "", redirectTo: "all-job", pathMatch: "full" },
  { path: "main", component: EditResumeComponent, canActivate:[AuthGuard] },
  { path: "main/:id/edit", component: EditResumeComponent, resolve: {profile: ResolverService}, canActivate:[AuthGuard] },
  { path: "firstpage", component: FirstPageComponent},
  { path:"signup", component: SignUpComponent},
  { path:"signup-recruiter", component: SignUpRecruiterComponent},
  { path: "login", component: LoginComponent },
  // { path: "profile", component: ProfilePageComponent, canActivate:[AuthGuard] },
  { path: "profile", component: ProfilePageComponent},
  { path: "about", component: AppAboutComponent },
  { path: "admin", component: AdminComponent, canActivate:[AuthGuard, AdminGuard], children:[
    {path:'',redirectTo:"usermanager", pathMatch:"full"},
    {path:'usermanager', component:AdminUserManagerComponent},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'notification', component:AdminNotificationComponent}
  ]},
  { path:"recruiter", component: RecruiterComponent, children:[
    {path:"", redirectTo:"create-post", pathMatch:"full"},
    {path:"create-post", component:RecruiterCreatePostComponent},
    {path:"review", component:RecruiterReviewComponent}

  ] },
  {path: "all-job", component:AllJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard]
})
export class AppRoutingModule {}
