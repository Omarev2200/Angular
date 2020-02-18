import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/shared/car';
import { AdCarsService } from '../ad-cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

adCar : ICar;
id : string;



  constructor(
    private adCarsService : AdCarsService, 
    private userService: UserService,
    private route : ActivatedRoute,
    private router : Router) { 
      
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.adCarsService.getById(this.id)
    .subscribe(data => {
      this.adCar = data;

      
    })

  }
  deletAdCar() {
    this.adCarsService.deleteAdCar(this.id)
    .subscribe((data) => {
      
      this.router.navigate(['']);
      console.log(data);
    } )

  }

}
