import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }



success(message: string){
  alertify.set('notifier', 'position', 'top-center');
  alertify.success(message);
}

warning(message: string){
  alertify.set('notifier', 'position', 'top-center');
  alertify.warning(message);
}
error(message: string){
  alertify.set('notifier', 'position', 'top-center');
  alertify.error(message);
}

}
