import { Component, OnInit } from '@angular/core';
import { Data } from '../model/Data.model';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styles: []
})
export class KeyFeaturesComponent implements OnInit {

  features = new Data();

  constructor() { }

  ngOnInit() {
    console.log("---sd---",this.features.keyFeatures.value1)
  }

}
