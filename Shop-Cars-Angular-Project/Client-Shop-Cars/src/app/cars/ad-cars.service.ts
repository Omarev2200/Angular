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
    return this.http.get<ICar>(`car`)
  }

  create(adCar: any) {
    return this.http.post<ICar>('car', adCar);
  }

  getById(adCarId: string) {
    return this.http.get<ICar>(`car/${adCarId}`)
  }

  getMyAdCars(userId:string) {
    return this.http.get<ICar>(`car/my-cars/${userId}`)
  }

  editSdCar(adCarId: string, data: ICar) {
    return this.http.put<ICar>(`car/${adCarId}`, data)
  }

  fineAdCars(query) {
    return this.http.get(`car/search?q=${query}`)
  }

  deleteAdCar(adCarId: string) {
    return this.http.delete<ICar>(`car/${adCarId}`)
  }
}
