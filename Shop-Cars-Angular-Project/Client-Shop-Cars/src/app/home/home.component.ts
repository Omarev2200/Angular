import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../cars/ad-cars.service';
import { ICar } from '../shared/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 adCars:ICar;

  constructor(private carsService:AdCarsService) { }

  ngOnInit(): void {
    this.carsService.load().subscribe(data => {
      this.adCars=data;
      
      
      
      
    }


    )
  }

}
