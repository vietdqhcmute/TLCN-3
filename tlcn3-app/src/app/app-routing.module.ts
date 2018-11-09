import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppLoginComponent } from './app-login/app-login.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppMainComponent } from './app-main/app-main.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path:"main",
    component: AppMainComponent
  },
  {
    path:"login",
    component: AppLoginComponent
  },
  {
    path: "profile",
    component: AppProfileComponent
  },
  {
    path: "about",
    component: AppAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
