import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
  } from "@angular/router";
  import { Observable } from "rxjs";
  import { Injectable } from "@angular/core";
  import { AuthService } from "./auth.service";
  
  @Injectable()
  export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      const isAdmin = this.authService.getIsAdmin();
      if (!isAdmin){
          this.router.navigate(['/login']);
      }
      return isAdmin;
    }
  }
  