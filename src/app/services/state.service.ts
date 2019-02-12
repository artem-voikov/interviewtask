import { Injectable } from '@angular/core';
import { Item } from '../infrastructure/Item';
import { Subject } from 'rxjs/Subject';
import { Page } from '../infrastructure/Page';

@Injectable()
export class StateService {
  Items: Subject<Item[]> = new Subject<Item[]>();
  ItemsThing: Item[];
  Page: Page = new Page();

  constructor() {
  }
}
