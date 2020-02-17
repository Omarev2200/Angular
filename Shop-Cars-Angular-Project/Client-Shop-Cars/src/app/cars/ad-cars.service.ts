import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { ICar } from '../shared/car';

@Injectable({
  providedIn: 'root'
})
export class AdCarsService {
  adCars: ICar[];

  readonly selectedCause: ICar;

  constructor(private http: HttpClient) { }

  load(id?: string) {
    return this.http.get<ICar[] | ICar>(`http://localhost:9999/api/car/'${id ? `/${id}` : ''}`).pipe(
      tap((adCars) => {
        if (id) {
          (this as any).selectedCause = adCars[0];
        } else {
          this.adCars = [].concat(adCars);
        }
      })
    );
  }

  create(adCar: any) {
    return this.http.post<ICar>('http://localhost:9999/api/car/', adCar);
  }
}
