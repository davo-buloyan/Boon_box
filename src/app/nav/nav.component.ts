import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

import { BoxServiceService } from "../main/service/box-service.service";
import { CardModel } from '../main/model/model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  @Input() cards: Array<CardModel>;

  groupedSlides: Array<Array<CardModel>>;

  datas: Array<string>

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService,
  ) {
    this.boxService.getCards().subscribe(data => {
      this.datas = data;
      console.log('ssmmmmms', this.datas);

    }
    )
  }

  ngOnInit() {
  }

}