import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) {

   }

   handleSubmit(value) {
    this.userService.register(value.email, value.password).subscribe(() => {
      this.router.navigate(['singin']);
    }, console.error);
    
    
  }

  ngOnInit(): void {
  }

}
