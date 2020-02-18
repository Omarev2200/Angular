import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../ad-cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private adCarsService: AdCarsService, private router: Router) { }

  ngOnInit(): void {
  }

  createAdCarHandler(data) {
    console.log(data);
    
    this.adCarsService.create(data).subscribe(() => {
      this.router.navigate(['']);
    });

  };
}

