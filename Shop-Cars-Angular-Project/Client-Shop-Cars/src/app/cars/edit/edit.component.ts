import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../ad-cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICar } from 'src/app/shared/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  adCar: ICar;
  constructor(
    private adCarsService: AdCarsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr : ToastrService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adCarsService.getById(this.id)
    .subscribe(data => {
      this.adCar = data;
      console.log(data);
      
      
    })

  }

  editAdCarHandler(data) {
    this.adCarsService.editSdCar(this.id,data)
    .subscribe(()=> {
      this.toastr.success('success', 'Edit')
      this.router.navigate([`/car/myAdCars/${this.id}`])
    })
  }

}
