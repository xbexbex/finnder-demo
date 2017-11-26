import { Component, OnInit } from '@angular/core';
import { Animations } from './recommend.animations';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
  animations: Animations
})
export class RecommendComponent implements OnInit {

  secondSlideState = 'inactive';
  firstSlideState = 'active';
  firstSubSlideState = 'active';
  secondSubSlideState = 'inactive';
  firstSlideDisabled = false;
  secondSlideDisabled = true;
  firstSubSlideDisabled = true;
  firstZindex = 2;
  secondZindex = 0;
  firstSubZindex = 3;
  secondSubZindex = 2;
  firstTextState = 'inactive';
  secondTextState = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  noClick() {
    this.firstSlideState = 'inactive';
    this.secondSlideState = 'active';
    this.firstSlideDisabled = true;
    this.secondSlideDisabled = false;
    this.firstSubSlideDisabled = true;
    this.secondZindex = 1;
    this.firstZindex = 0;
  }

  yesClick() {
    this.firstSubSlideState = 'inactive';
    this.secondSubSlideState = 'active';
    this.secondSlideDisabled = true;
    this.firstSubSlideDisabled = false;
    this.secondSubZindex = 1;
    this.firstSubZindex = 0;
    this.firstTextState = 'active';
    this.secondTextState = 'active';
  }

}
