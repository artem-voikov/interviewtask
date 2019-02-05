import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { stat } from 'fs';
import { Item } from '../../infrastructure/Item';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  items: Item[];

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.Items.subscribe(x => this.items = x );
  }

}
