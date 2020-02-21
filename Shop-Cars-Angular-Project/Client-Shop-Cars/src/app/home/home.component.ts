import { Component, OnInit,  OnDestroy,  } from '@angular/core';
import { AdCarsService } from '../cars/ad-cars.service';
import { ICar } from '../shared/car';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,  OnDestroy {

  adCars: any;
  searchResult: any;
  resulr: [];
  isSearch: boolean;
  adCars$


  get checkAdCars(){return !!this.adCars.length};

  constructor(
    private carsService: AdCarsService, 
    private userService: UserService,
    private adCarsService: AdCarsService
    ) { };

  ngOnInit(): void {
     this.adCars$ = this.carsService.load()
    .subscribe(data => {
      this.adCars = data; 
    })
  };

  search(query) {
    if (query.search === '') {
      return 
    } else {
      this.resulr = [];
      this.adCarsService.fineAdCars(query.search)
      .subscribe((data) => {
        this.searchResult = data;
        this.resulr = this.searchResult.articles;
        this.isSearch = true;
      })
    }
  };

  ngOnDestroy() {
    this.adCars$.unsubscribe();
  }

}
