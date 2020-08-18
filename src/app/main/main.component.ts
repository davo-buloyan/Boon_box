import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';

import { BoxServiceService } from './service/box-service.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  cards$ = this.boxService.getCards().pipe(
    // tap(data => console.log(data))
  );

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService
  ) { }


}
