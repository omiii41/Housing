import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyFrom: NgForm;
@ViewChild('formTabs') staticTabs: TabsetComponent;
  constructor(private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    console.log('Congrats, Form has been submitted');
    console.log(this.addPropertyFrom);
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
