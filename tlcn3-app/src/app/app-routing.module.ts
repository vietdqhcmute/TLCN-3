import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppLoginComponent } from "./app-login/app-login.component";
import { AppProfileComponent } from "./app-profile/app-profile.component";
import { AppAboutComponent } from "./app-about/app-about.component";
import { AppMainComponent } from "./app-main/app-main.component";

import { ResolverService } from "./services/resolver.service";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "profile", pathMatch: "full" },
  { path: "main", component: AppMainComponent, canActivate:[AuthGuard] },
  { path: "main/:id/edit", component: AppMainComponent, resolve: {profile: ResolverService}, canActivate:[AuthGuard] },
  { path: "login", component: AppLoginComponent },
  { path: "profile", component: AppProfileComponent, canActivate:[AuthGuard] },
  {
    path: "profile/:id",
    component: AppProfileComponent,
    resolve: { profile: ResolverService }
  },
  { path: "about", component: AppAboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
