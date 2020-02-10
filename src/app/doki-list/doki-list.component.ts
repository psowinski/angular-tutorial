import { DokiSet } from './../contracts/doki.contract';
import { DokiDataService } from './../services/doki-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doki-list',
  template: `
    <h1>Lista zestawow</h1>
    <app-doki-thumbinal *ngFor="let set of sets" [data]="set"></app-doki-thumbinal>
  `,
  styleUrls: ['./doki-list.component.scss']
})
export class DokiListComponent implements OnInit {

  constructor(private dokiDataService: DokiDataService) {
  }

  sets: DokiSet[]

  ngOnInit() {
    this.sets = this.dokiDataService.getDokiSets();
  }

}
