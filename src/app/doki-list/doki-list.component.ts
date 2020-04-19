import { DokiSet } from './../contracts/doki.contract';
import { DokiDataService } from './../services/doki-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>Lista zestawow</h1>
    <app-doki-thumbinal *ngFor="let set of sets" [data]="set"></app-doki-thumbinal>
  `
})
export class DokiListComponent implements OnInit {

  constructor(private dokiDataService: DokiDataService) {
  }

  sets: DokiSet[] = [];

  ngOnInit() {
    this.dokiDataService.getDokiSetsWeb().subscribe(data => { this.sets.push(data); });
  }
}
