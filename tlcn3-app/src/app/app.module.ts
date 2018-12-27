import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppLoginComponent } from "./app-login/app-login.component";
import { AppProfileComponent } from "./app-profile/app-profile.component";
import { AppAboutComponent } from "./app-about/app-about.component";
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
import { DiaExperienceComponent } from "./dia-experience/dia-experience.component";
import { DiaEducationComponent } from './dia-education/dia-education.component';
import { DiaProjectComponent } from './dia-project/dia-project.component';
import { ConvertToMonthPipe } from "./share/convert-to-month.pipe";
import { AuthInterceptor } from "./auth-interceptor";
import { AppProfileInfoComponent } from './app-profile-info/app-profile-info.component';
import { DiaConfirmComponent } from './dia-confirm/dia-confirm.component';
import { PageA4DefaultComponent } from './page-a4-default/page-a4-default.component';
import { PageA4DesignComponent } from './page-a4-design/page-a4-design.component';
import { PageA4DesignBlueComponent } from './page-a4-design-blue/page-a4-design-blue.component';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
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
    AppProfileInfoComponent,
    DiaConfirmComponent,
    PageA4DefaultComponent,
    PageA4DesignComponent,
    PageA4DesignBlueComponent,
    FirstPageComponent,
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
  providers: [{provide: Window, useValue: window},{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent],
  entryComponents: [DiaExperienceComponent, DiaEducationComponent, DiaProjectComponent, DiaConfirmComponent]
})
export class AppModule {}
