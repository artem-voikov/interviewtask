import { Component, OnInit } from '@angular/core';
import {Http } from '@angular/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testlog: any;

  constructor(private http: Http) { }

  async ngOnInit() {

    const thing = this.http.get( )


    thing.subscribe(
      x => this.testlog = { thing: thing, action: 'next'}, 
      y => this.testlog = { error: y}, 
      () => { this.testlog = { action: 'complete'}; });

  }

}
