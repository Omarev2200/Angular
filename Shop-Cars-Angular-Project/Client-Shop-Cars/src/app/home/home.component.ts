import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../cars/ad-cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get adCars() { return this.carsService.adCars; }

  constructor(private carsService:AdCarsService) { }

  ngOnInit(): void {
    this.carsService.load().subscribe(data => {
      console.log(data)
    })
  }

}
