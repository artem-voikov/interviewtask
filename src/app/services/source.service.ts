import { Item } from './../infrastructure/Item';
import { Injectable } from '@angular/core';
import { Page } from '../infrastructure/Page';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SourceService {

  constructor() { }

  getItems(page: Page): Observable<Item[]> {
    const result: Item[] = [
      { country: 'urugwai', quantity: 3, rmc: 'Q672354' },
      { country: 'zimbabwe', quantity: 32, rmc: 'DK2387' },
      { country: 'zimbabwe', quantity: 22, rmc: 'DK243357' },
      { country: 'zimbabwe', quantity: 5, rmc: 'DK2777' },
      { country: 'argentina', quantity: 2, rmc: 'PP7675' },
      { country: 'argentina', quantity: 8, rmc: 'DK243357' },
      { country: 'zambia', quantity: 43, rmc: 'MD93413' },
      { country: 'kongo', quantity: 15, rmc: 'DK2387' },
      { country: 'kongo', quantity: 55, rmc: 'Q672354' },
    ];

    // simulating http thing
    return Observable.of(result);
  }

}
