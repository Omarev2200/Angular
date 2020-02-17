import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  

  constructor(private userService: UserService, private router:Router) {
    
   }

   handleSubmit(data) {
    
    this.userService.login(data.email, data.password).subscribe(() => {
     
      this.router.navigate(['']);
    }, console.error);
  }
  ngOnInit(): void {
  }

}
