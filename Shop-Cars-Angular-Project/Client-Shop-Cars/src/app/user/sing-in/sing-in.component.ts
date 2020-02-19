import { Component,  } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent   {

  

  constructor(private userService: UserService, private router:Router,private toastr: ToastrService) {
    
   }

   handleSubmit(data) {
    
    this.userService.login(data.email, data.password).subscribe(value => {
      this.toastr.success('success', 'Login')
      this.router.navigate([''])
    });
}
}
