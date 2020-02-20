import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../cars/ad-cars.service';
import { ICar } from '../shared/car';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  adCars: any;

  get checkAdCars(){return !!this.adCars.length}

  constructor(private carsService: AdCarsService, private userService: UserService) { }

  ngOnInit(): void {
    
    this.carsService.load().subscribe(data => {
      this.adCars = data;
      console.log(!!this.adCars.length);
      
      
    }
    


    )
  }

}
