import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

import { BoxServiceService } from '../main/service/box-service.service';
import { CardModel } from '../main/model/model';

@Component({
  selector: 'app-box-content',
  templateUrl: './box-content.component.html',
  styleUrls: ['./box-content.component.scss']
})
export class BoxContentComponent {

  data: CardModel = new CardModel();
  arrayOfImages: Array<string>;
  clickedImg: string

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService,
  ) {
    this.route.params.subscribe(param => {
      this.load(+param.id)
    });
  }

  load(id) {
    this.boxService.getCards().subscribe(data => {
      this.data = data.find(res =>
        res.categoryId === id
      );
    });
  }
}
