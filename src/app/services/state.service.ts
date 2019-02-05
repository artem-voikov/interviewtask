import { Injectable } from '@angular/core';
import { Item } from '../infrastructure/Item';
import { Observable } from 'rxjs/Observable';
import { Page } from '../infrastructure/Page';

@Injectable()
export class StateService {
  Items: Observable<Item[]>;
  Page: Observable<Page>;

  constructor() { }

}
