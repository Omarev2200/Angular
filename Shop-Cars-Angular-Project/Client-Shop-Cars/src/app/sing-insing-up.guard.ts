import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class SingInsingUpGuard implements CanActivate {

  constructor(private userService:UserService,
    private router:Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  check() : boolean {

    if (this.userService.isLogged) {
      console.log('true')

      return true;
    }
    this.router.navigate(['']);
        
    return false;
  }
  
}
