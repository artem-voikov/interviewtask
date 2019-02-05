import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SourceService } from '../../services/source.service';
import { StateService } from '../../services/state.service';
import { Page } from '../../infrastructure/Page';
import { Item } from '../../infrastructure/Item';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  countries: string[];
  rmcs: string[];

  country: string;
  rmc: string;

  @ViewChild('ddlcountry') ddlcountry: HTMLSelectElement;
  @ViewChild('ddlrmcs') ddlrmcs: HTMLSelectElement;

  constructor(private source: SourceService, private state: StateService) { }

  ngOnInit() {
    this.state.Items = this.source.getItems(new Page());
    this.state.Items.subscribe(x => this.setupFilters(x));
  }
  setupFilters(x: Item[]): void {
    this.countries = Array.from(new Set(x.map(y => y.country)).values());
    this.rmcs = Array.from(new Set(x.map(y => y.rmc)).values());
  }

  filter(d) {
    const result = [this.country, this.rmc].filter(dd => dd);
    console.log(result);
  }
}
