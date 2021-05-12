import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

public propertyId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params)=>{
        this.propertyId = +params['id'];
      }
    );
  }

  // tslint:disable-next-line: typedef
  onSelectNext(){

    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
