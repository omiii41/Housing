import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAllProperties(SellRent: number): Observable<IProperty[]>
  {
     return this.http.get('data/properties.json').pipe(
       map(data => {
         const propertyListArray: Array<IProperty> = [];
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
