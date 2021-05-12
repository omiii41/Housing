import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertBase } from 'src/app/model/IPropertBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyFrom: NgForm;
@ViewChild('formTabs') staticTabs: TabsetComponent;


propertyType: Array<string> = ['Apartment', 'House', 'Independent', 'Duplex' ];
furnishType: Array<string> = ['Fully Furnished', 'Semi Furnished', 'Unfurnished' ];

propertyView: IPropertBase = {
  Id: null,
  Name: '',
  Price: '',
  SellRent: null,
  PType: null,
  FType: null,
  bhk: null,
  BuiltArea: null,
  city: null,
  rtm: null

};

  constructor(private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    console.log('Congrats, Form has been submitted');
    console.log('SellRent=' + this.addPropertyFrom.value.BasicInfo.SellRent);
    console.log(this.addPropertyFrom);
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
