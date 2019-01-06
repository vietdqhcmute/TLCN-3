import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppProfileComponent } from "./app-profile/app-profile.component";
import { AppAboutComponent } from "./about/about.component";
import { AppMainComponent } from "./app-main/app-main.component";
import { PageSidebarComponent } from "./page-sidebar/page-sidebar.component";
import { PageGetInfoComponent } from "./page-get-info/page-get-info.component";
import { PageEditorComponent } from "./page-editor/page-editor.component";
import { PageTemplateComponent } from "./page-template/page-template.component";
import { PageToolbarComponent } from "./page-toolbar/page-toolbar.component";
import "hammerjs";

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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DiaExperienceComponent } from "./dialog/dia-experience/dia-experience.component";
import { DiaEducationComponent } from "./dialog/dia-education/dia-education.component";
import { DiaProjectComponent } from "./dialog/dia-project/dia-project.component";
import { DiaConfirmComponent } from "./dialog/dia-confirm/dia-confirm.component";

import { ConvertToMonthPipe } from "./share/convert-to-month.pipe";
import { EmailFiterPipe } from "./share/filter-by-email.pipe";

import { AuthInterceptor } from "./auth-interceptor";
import { AppProfileInfoComponent } from "./app-profile-info/app-profile-info.component";

import { PageA4DefaultComponent } from "./template-custom/page-a4-default/page-a4-default.component";
import { PageA4DesignComponent } from "./template-custom/page-a4-design/page-a4-design.component";
import { PageA4DesignBlueComponent } from "./template-custom/page-a4-design-blue/page-a4-design-blue.component";
import { PageA4DesignBlue01Component } from "./template-custom/page-a4-design-blue01/page-a4-design-blue01.component";
import { PageA4DesignRed01Component } from "./template-custom/page-a4-design-red01/page-a4-design-red01.component";

import { FirstPageComponent } from "./first-page/first-page.component";
import { PageAdminComponent } from "./page-admin/page-admin.component";
import { PageAdminSidebarComponent } from "./page-admin/page-admin-sidebar/page-admin-sidebar.component";
import { PageAdminUserManagerComponent } from "./page-admin/page-admin-user-manager/page-admin-user-manager.component";
import { PageAdminDashboardComponent } from "./page-admin/page-admin-dashboard/page-admin-dashboard.component";
import { PageAdminNotificationComponent } from "./page-admin/page-admin-notification/page-admin-notification.component";
import { ErrorInterceptor } from "./error-interceptor";
import { AppProfileInfoNewfeedComponent } from './app-profile-info/app-profile-info-newfeed/app-profile-info-newfeed.component';
import { AppProfileInfoDreamjobComponent } from './app-profile-info/app-profile-info-dreamjob/app-profile-info-dreamjob.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppProfileComponent,
    AppAboutComponent,
    AppMainComponent,
    PageSidebarComponent,
    PageGetInfoComponent,
    PageEditorComponent,
    PageTemplateComponent,
    PageToolbarComponent,
    DiaExperienceComponent,
    DiaEducationComponent,
    DiaProjectComponent,
    ConvertToMonthPipe,
    EmailFiterPipe,
    AppProfileInfoComponent,
    DiaConfirmComponent,
    PageA4DefaultComponent,
    PageA4DesignComponent,
    PageA4DesignBlueComponent,
    FirstPageComponent,
    PageA4DesignBlue01Component,
    PageA4DesignRed01Component,
    PageAdminComponent,
    PageAdminSidebarComponent,
    PageAdminUserManagerComponent,
    PageAdminDashboardComponent,
    PageAdminNotificationComponent,
    AppProfileInfoNewfeedComponent,
    AppProfileInfoDreamjobComponent
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
    BrowserAnimationsModule
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
