import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertBase } from '../model/IPropertBase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAllProperties(SellRent: number): Observable<IPropertBase[]>
  {
     return this.http.get('data/properties.json').pipe(
       map(data => {
         const propertyListArray: Array<IPropertBase> = [];
         for (const id in data){
           if (data.hasOwnProperty(id) && data[id].SellRent === SellRent)
           {
            propertyListArray.push(data[id]);
           }
         }
         return propertyListArray;
       })
     );
  }

}
