import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { BoxServiceService } from './service/box-service.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cards$ = this.boxService.getCards().pipe(
    tap(data => console.log(data))
  );

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxServiceService
  ) {}

  ngOnInit() {}

}


// const observable$ = new Observable((observer) => {
//   let count = 0;

//   const intervalId = setInterval(() => {
//     observer.next(count++);
//   }, 2500);

//   setTimeout(() => {
//     clearInterval(intervalId);
//     observer.complete();
//   }, 10000);
// });


// observable$.subscribe({
//   next: (num) => {
//     console.log(num);
//   },
//   error: (error) => {
//     console.error(error);
//   },
//   complete: () => {
//     console.log('COMPLETED');
//   }
// });
