import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginregisterGuard implements CanActivate {

  constructor(
    private userService:UserService,
    private router:Router
    ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
    
  }

  check() : boolean {

    if (this.userService.isLogged) {
        this.router.navigate([''])
        return true;
    }
    this.router.navigate(['singin'])
    return false;

  }
  
}