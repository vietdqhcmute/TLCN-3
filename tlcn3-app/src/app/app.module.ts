import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { AppAboutComponent } from "./about/about.component";
import { EditResumeComponent } from "./edit-resume/edit-resume.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { GetInfoComponent } from "./edit-resume/get-info/get-info.component";
import { A4PreviewComponent } from "./edit-resume/a4-preview/a4-preview.component";
import { TemplateSelectionComponent } from "./edit-resume/template-selection/template-selection.component";
import { EditorToolbarComponent } from "./editor-toolbar/editor-toolbar.component";
import "hammerjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DiaExperienceComponent } from "./dialog/dia-experience/dia-experience.component";
import { DiaEducationComponent } from "./dialog/dia-education/dia-education.component";
import { DiaProjectComponent } from "./dialog/dia-project/dia-project.component";
import { DiaConfirmComponent } from "./dialog/dia-confirm/dia-confirm.component";
import { ConvertToMonthPipe } from "./share/convert-to-month.pipe";
import { EmailFiterPipe } from "./share/filter-by-email.pipe";
import { AuthInterceptor } from "./auth-interceptor";
import { PageA4DefaultComponent } from "./template-custom/page-a4-default/page-a4-default.component";
import { PageA4DesignComponent } from "./template-custom/page-a4-design/page-a4-design.component";
import { PageA4DesignBlueComponent } from "./template-custom/page-a4-design-blue/page-a4-design-blue.component";
import { PageA4DesignBlue01Component } from "./template-custom/page-a4-design-blue01/page-a4-design-blue01.component";
import { PageA4DesignRed01Component } from "./template-custom/page-a4-design-red01/page-a4-design-red01.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminSidebarComponent } from "./admin/admin-sidebar/admin-sidebar.component";
import { AdminUserManagerComponent } from "./admin/admin-user-manager/admin-user-manager.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { AdminNotificationComponent } from "./admin/admin-notification/admin-notification.component";
import { ErrorInterceptor } from "./error-interceptor";
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { SignUpRecruiterComponent } from './login/sign-up-recruiter/sign-up-recruiter.component';
import { AllJobComponent } from './all-job/all-job.component';
import { CompanyFrameComponent } from './all-job/company-frame/company-frame.component';
import { RecruiterCreatePostComponent } from './recruiter/recruiter-create-post/recruiter-create-post.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { RecruiterReviewComponent } from './recruiter/recruiter-review/recruiter-review.component';
import { RecruiterReviewPostComponent } from './recruiter/recruiter-review/recruiter-review-post/recruiter-review-post.component';
import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterSubcriberComponent } from './recruiter/recruiter-subcriber/recruiter-subcriber.component';
import {
  MatSelectModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSliderModule,
  MatCheckboxModule,
  MatChipsModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { JobFrameComponent } from './recruiter/recruiter-dashboard/job-frame/job-frame.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { CompanyDescriptionComponent } from './company-description/company-description.component';
import { DiaEditProfileComponent } from './dialog/dia-edit-profile/dia-edit-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidateComponent,
    AppAboutComponent,
    EditResumeComponent,
    TopbarComponent,
    GetInfoComponent,
    A4PreviewComponent,
    TemplateSelectionComponent,
    EditorToolbarComponent,
    DiaExperienceComponent,
    DiaEducationComponent,
    DiaProjectComponent,
    ConvertToMonthPipe,
    EmailFiterPipe,
    DiaConfirmComponent,
    PageA4DefaultComponent,
    PageA4DesignComponent,
    PageA4DesignBlueComponent,
    PageA4DesignBlue01Component,
    PageA4DesignRed01Component,
    AdminComponent,
    AdminSidebarComponent,
    AdminUserManagerComponent,
    AdminDashboardComponent,
    AdminNotificationComponent,
    SignUpComponent,
    RecruiterComponent,
    SignUpRecruiterComponent,
    AllJobComponent,
    CompanyFrameComponent,
    RecruiterCreatePostComponent,
    RecruiterReviewComponent,
    RecruiterReviewPostComponent,
    RecruiterDashboardComponent,
    RecruiterSubcriberComponent,
    JobFrameComponent,
    JobDescriptionComponent,
    CompanyDescriptionComponent,
    DiaEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DiaExperienceComponent,
    DiaEducationComponent,
    DiaProjectComponent,
    DiaConfirmComponent
  ]
})
export class AppModule {}
