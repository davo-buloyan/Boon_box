import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoxServiceService } from './service/box-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  cards$ = this.boxService.getCards().pipe(
  );

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService
  ) { }


}
