import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppLoginComponent } from "./app-login/app-login.component";
import { AppProfileComponent } from "./app-profile/app-profile.component";
import { AppAboutComponent } from "./app-about/app-about.component";
import { AppMainComponent } from "./app-main/app-main.component";

import { ResolverService } from "./services/resolver.service";
import { AuthGuard } from "./services/auth.guard";
import { FirstPageComponent } from "./first-page/first-page.component";
import { PageAdminComponent } from "./page-admin/page-admin.component";
import { AdminGuard } from "./services/admin.guard";
import { PageAdminUserManagerComponent } from "./page-admin/page-admin-user-manager/page-admin-user-manager.component";
import { PageAdminDashboardComponent } from "./page-admin/page-admin-dashboard/page-admin-dashboard.component";
import { PageAdminNotificationComponent } from "./page-admin/page-admin-notification/page-admin-notification.component";

const routes: Routes = [
  { path: "", redirectTo: "admin", pathMatch: "full" },
  { path: "main", component: AppMainComponent, canActivate:[AuthGuard] },
  { path: "main/:id/edit", component: AppMainComponent, resolve: {profile: ResolverService}, canActivate:[AuthGuard] },
  { path: "firstpage", component: FirstPageComponent},
  { path: "login", component: AppLoginComponent },
  { path: "profile", component: AppProfileComponent, canActivate:[AuthGuard] },
  { path: "about", component: AppAboutComponent },
  { path: "admin", component: PageAdminComponent, canActivate:[AuthGuard, AdminGuard], children:[
    {path:'', component: PageAdminUserManagerComponent},
    {path:'dashboard',component:PageAdminDashboardComponent},
    {path:'notification', component:PageAdminNotificationComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard]
})
export class AppRoutingModule {}
