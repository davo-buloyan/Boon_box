import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { BoxServiceService } from '../main/service/box-service.service';
import { CardModel } from '../main/model/model';

@Component({
  selector: 'app-box-content',
  templateUrl: './box-content.component.html',
  styleUrls: ['./box-content.component.scss']
})
export class BoxContentComponent implements OnInit {

  data: CardModel = new CardModel();
  arrayOfImages: Array<string>;
  clickedImg: string

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService,
    )

    {
      // const id: Observable<string> = route.params.pipe(map(p => p.id));
      // console.log(route.params['id']);
      this.route.params.subscribe(param => {
        this.load(+param.id);
      });


    }

    load(id){
      this.boxService.getCards().subscribe(data => {
        this.data = data.find(res =>
          res.categoryId === id
          );
      });
    }

    removeImage(index){

    }

  ngOnInit() {

  }

}
