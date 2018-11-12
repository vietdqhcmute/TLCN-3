import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class ResolverService {
  constructor(private user: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.user.getUserByID(route.params.id);
  }
}
