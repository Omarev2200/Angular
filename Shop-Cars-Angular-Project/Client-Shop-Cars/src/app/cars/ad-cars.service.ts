import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { ICar } from '../shared/car';

@Injectable({
  providedIn: 'root'
})
export class AdCarsService {
 



  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<ICar>(`http://localhost:9999/api/car/`)
  }

  create(adCar: any) {
    return this.http.post<ICar>('http://localhost:9999/api/car/', adCar);
  }
}
