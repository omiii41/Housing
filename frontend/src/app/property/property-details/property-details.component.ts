import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

public propertyId: number;
property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    );

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     );
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal_img_1.jpg',
        medium: 'assets/images/internal_img_1.jpg',
        big: 'assets/images/internal_img_1.jpg'
      },
      {
        small: 'assets/images/internal_img_2.jpg',
        medium: 'assets/images/internal_img_2.jpg',
        big: 'assets/images/internal_img_2.jpg'
      },
      {
        small: 'assets/images/internal_img_3.jpg',
        medium: 'assets/images/internal_img_3.jpg',
        big: 'assets/images/internal_img_3.jpg'
      },
      {
        small: 'assets/images/internal_img_4.jpg',
        medium: 'assets/images/internal_img_4.jpg',
        big: 'assets/images/internal_img_4.jpg'
      },
      {
        small: 'assets/images/internal_img_5.jpg',
        medium: 'assets/images/internal_img_5.jpg',
        big: 'assets/images/internal_img_5.jpg'
      }
    ];
  }

}
