import { Item } from './../infrastructure/Item';
import { Injectable } from '@angular/core';
import { Page } from '../infrastructure/Page';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SourceService {
  constructor() {}

  getItems(page: Page): Observable<Item[]> {
    let result: Item[] = [
      { country: 'urugwai', quantity: 3, rmc: 'Q672354' },
      { country: 'zimbabwe', quantity: 32, rmc: 'DK2387' },
      { country: 'zimbabwe', quantity: 22, rmc: 'DK243357' },
      { country: 'zimbabwe', quantity: 5, rmc: 'DK2777' },
      { country: 'argentina', quantity: 2, rmc: 'PP7675' },
      { country: 'argentina', quantity: 8, rmc: 'DK243357' },
      { country: 'zambia', quantity: 43, rmc: 'MD93413' },
      { country: 'kongo', quantity: 15, rmc: 'DK2387' },
      { country: 'kongo', quantity: 55, rmc: 'Q672354' }
    ];

    result =
      page && page.filterBy[0]
        ? result.filter(x => x.country === page.filterBy[0])
        : result;

    result =
      page && page.sortBy
        ? result.sort((o1, o2) => {
            if (o1[page.sortBy] > o2[page.sortBy]) {
              return 1;
            }
            if (o1[page.sortBy] < o2[page.sortBy]) {
              return -1;
            }
            return 0;
          })
        : result;

    return of(result);
  }
}
