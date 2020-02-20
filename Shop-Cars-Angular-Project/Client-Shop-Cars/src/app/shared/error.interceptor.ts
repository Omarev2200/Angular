import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService, 
    private router: Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    return next.handle(request)
    .pipe(catchError((err:HttpErrorResponse) => {

      switch(err.status) {
        case 401:
          
          
          this.toastr.error(err.error,'Warning!')
          break;
          case 500:
            this.toastr.error('This email already exists','Warning!')
            break
      }
      return throwError(err)
    }))
  }
}
