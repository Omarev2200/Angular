import { Component, OnInit } from '@angular/core';
import { AdCarsService } from '../ad-cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: string;
  constructor(
    private adCarsService: AdCarsService,
    private router: Router, private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  createAdCarHandler(data) {
    this.id = this.route.snapshot.params['id'];

    this.adCarsService.create(data).subscribe(() => {
      this.toastr.success('success', 'Create')
      this.router.navigate([`/car/myAdCars/${this.id}`]);
    });

  };
}

