import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/shared/car';
import { AdCarsService } from 'src/app/cars/ad-cars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: any;
  resulr: Array<{}>;
  isSearch: boolean
  constructor(private adCarsService: AdCarsService) { }

  ngOnInit(): void {
  }

  

}
