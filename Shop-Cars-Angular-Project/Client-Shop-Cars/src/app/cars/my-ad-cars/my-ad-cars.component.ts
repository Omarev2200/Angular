import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../ad-cars.service';
import { ICar } from 'src/app/shared/car';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-my-ad-cars',
  templateUrl: './my-ad-cars.component.html',
  styleUrls: ['./my-ad-cars.component.css']
})
export class MyAdCarsComponent implements OnInit {
  adCars: any;
  userId: string;
  get checkAdCars(){return !!this.adCars.length}

  constructor(private adCarsService: AdCarsService, private userService: UserService) { }

  ngOnInit(): void {
    console.log('here' );
    this.userId = this.userService.currentUser._id
    this.adCarsService.getMyAdCars(this.userId).subscribe((data) => {
      this.adCars = data;
      
      
    })
  }

}
