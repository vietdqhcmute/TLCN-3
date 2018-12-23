import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppLoginComponent } from "./app-login/app-login.component";
import { AppProfileComponent } from "./app-profile/app-profile.component";
import { AppAboutComponent } from "./app-about/app-about.component";
import { AppMainComponent } from "./app-main/app-main.component";

import { ResolverService } from "./services/resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "main", component: AppMainComponent },
  { path: "main/:id/edit", component: AppMainComponent, resolve: {profile: ResolverService} },
  { path: "login", component: AppLoginComponent },
  { path: "profile", component: AppProfileComponent },
  // {
  //   path: "profile/:id",
  //   component: AppProfileComponent,
  //   resolve: { profile: ResolverService }
  // },
  { path: "about", component: AppAboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
