
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertBase } from 'src/app/model/IPropertBase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IPropertBase>;

constructor(private route: ActivatedRoute, private housingService: HousingService) { }

ngOnInit(): void {
  if (this.route.snapshot.url.toString()){
    this.SellRent = 2;
  }
  this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
            this.properties = data;

            console.log(data);
          }, error => {
            console.log('httperror:');
            console.log(error);
          }
    );
  }
}
