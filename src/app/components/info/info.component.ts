import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Item } from '../../infrastructure/Item';
import { SourceService } from '../../services/source.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  items: Item[];

  constructor(private state: StateService, private source: SourceService) {}

  ngOnInit() {
    console.log('ffff', this.state.Items);

    // this thing is for the first page opening
    this.items = this.state.ItemsThing;
    
    this.state.Items.subscribe(x => {
      this.items = x;
      console.log('sdsd');
    });
  }

  sortBy(sort) {
    console.log(sort);
    
    const page = this.state.Page;
    page.sortBy = sort;
    
    this.source.getItems(page);
  }
}
