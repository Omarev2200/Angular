import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../user/user.service';
import { ICar } from '../shared/car';


@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  constructor(private userService: UserService) { }

  transform(adCars: ICar): any {
     return  this.userService.currentUser._id === adCars.author;
     
   
  }

}
