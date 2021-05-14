import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverServiceService implements Resolve<Property> {

constructor(private housingService: HousingService,
            private router: Router) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> | Property{
  const propId = route.params['id'];
  return this.housingService.getProperty(+propId).pipe(
    catchError(error => {
      this.router.navigate(['/']);
      return of(null);
    })
  );
}

}
