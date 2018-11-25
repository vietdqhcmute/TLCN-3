import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
  MatTabsModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DiaExperienceComponent } from "./dia-experience/dia-experience.component";
import { DiaEducationComponent } from './dia-education/dia-education.component';
import { DiaProjectComponent } from './dia-project/dia-project.component';
import { ConvertToMonthPipe } from "./share/convert-to-month.pipe";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DiaExperienceComponent, DiaEducationComponent, DiaProjectComponent]
})
export class AppModule {}
