import { DokiSet } from './../contracts/doki.contract';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doki-thumbinal',
  templateUrl: './doki-thumbinal.component.html',
  styleUrls: ['./doki-thumbinal.component.scss']
})
export class DokiThumbinalComponent implements OnInit {

  @Input() data: DokiSet;

  licz = 3.112;

  constructor() { }

  ngOnInit() {
  }

}
