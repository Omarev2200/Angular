import { Component } from '@angular/core';
import {UserService} from './user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'shop-cars';

  get isReady(): boolean {
    return this.userUservice.currentUser !== undefined;
  }

  constructor(private userUservice: UserService) {

  }
}
