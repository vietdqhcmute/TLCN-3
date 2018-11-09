import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppMainComponent } from './app-main/app-main.component';
import { PageSidebarComponent } from './page-sidebar/page-sidebar.component';
import { PageGetInfoComponent } from './page-get-info/page-get-info.component';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { PageTemplateComponent } from './page-template/page-template.component';

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
    PageTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
