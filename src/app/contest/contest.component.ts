import { Component, OnInit } from '@angular/core';
import { Data } from '../model/Data.model';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styles: []
})
export class ContestComponent implements OnInit {

  contestValue  = new Data();
  
  constructor() { 

  }

  ngOnInit() {

  }

}
