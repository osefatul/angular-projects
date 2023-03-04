import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { take, skipWhile, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";



@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.signedin$.pipe(
      skipWhile(value => value === null),// skip value if is null.
      take(1),//make it complete after one value
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigateByUrl("/");
        }
      })
    );
  }
}