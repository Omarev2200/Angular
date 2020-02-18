import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { IUser } from '../shared/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;
  

  get isLogged() { return !!this.currentUser; }
  authCompleted$ = this.http.get("auth").pipe(shareReplay(1));


  constructor(private http: HttpClient, private router: Router) {
    this.authCompleted$.subscribe((user: any) => {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    });
  }
  
  register(email: string, password: string) {
    return this.http.post('user/register', { email, password });
  }

  login(email: string, password: string) {
    return this.http.post('user/login', { email, password }).pipe(tap((user: any) => {
      this.currentUser = user;
      console.log(user);
      
    }));
  }

  logout() {
    return this.http.post('user/logout', {}).pipe(tap(() => {
      window.location.href = '/'
      this.currentUser = null;
      
    }));
  }
}
