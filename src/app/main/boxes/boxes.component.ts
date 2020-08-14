import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from '../model/model';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit, OnChanges {

  @Input() cards: Array<CardModel>;

  groupedSlides: Array< Array<CardModel> >;

  perSlide = 4;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.cards && changes.cards.currentValue) {

      const items = this.cards;

      const matrix = [];

      for (let i = 0; i < items.length; i = i + this.perSlide) {
        matrix.push( items.slice(i, i + this.perSlide) );
      }

      this.groupedSlides = matrix;

    }
  }

  ngOnInit() {
  }

  onSlide() {

  }

  btnClick(id) {
    this.router.navigate(['/boxImages', id]);
  }
}
