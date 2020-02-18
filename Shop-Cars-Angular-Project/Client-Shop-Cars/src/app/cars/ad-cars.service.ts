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

  getById(adCarId :string) {
    return this.http.get<ICar>(`http://localhost:9999/api/car/${adCarId}`)
  }

  editSdCar(adCarId :string, data : ICar) {
    return this.http.put<ICar>(`http://localhost:9999/api/car/${adCarId}`,data)
  }

  deleteAdCar(adCarId : string) {
    return this.http.delete<ICar>(`http://localhost:9999/api/car/${adCarId}`)
  }
}
