import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {CardModel} from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class BoxServiceService {
  private jsonURL = 'assets/data.json';

  constructor(
    private http: HttpClient
  ) {}

  public getCards(): Observable<any> {
    return this.http.get<Array<any>>(this.jsonURL).pipe(
      map(data => {
        return [...data];
      })
    );
  }
}
