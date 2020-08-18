import { Component, Input } from '@angular/core';
import { Router, } from '@angular/router';

import { BoxServiceService } from "../main/service/box-service.service";
import { CardModel } from '../main/model/model';

 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


  @Input() cards: Array<CardModel>;

  groupedSlides: Array<Array<CardModel>>;

  datas: Array<string>

  constructor(
    private router: Router,
    private boxService: BoxServiceService,
  ) {
    this.boxService.getCards().subscribe(data => {
      this.datas = data;
    })
  }

  navigateTo(id){
    this.router.navigate(['/boxImages', id]);
  }
}