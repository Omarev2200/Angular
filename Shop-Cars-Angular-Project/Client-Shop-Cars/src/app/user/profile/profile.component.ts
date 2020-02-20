import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  

  logout() {
    this.userService.logout().subscribe(() => {

      this.router.navigate(['singin']);

    });
  }

  editProfile(data) {
    this.userService.editUser(this.id,data).subscribe(() => {
      this.logout()
      
    })

  }

}
