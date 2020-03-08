import { DokiSet } from './../contracts/doki.contract';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doki-thumbinal',
  templateUrl: './doki-thumbinal.component.html',
  styleUrls: ['./doki-thumbinal.component.scss']
})
export class DokiThumbinalComponent implements OnInit {

  @Input() data: DokiSet;

  visual_price: number;
  visual_element_price: number;

  constructor() { }

  ngOnInit() {
    this.calculate_price();
  }

  calculate_price() {
    this.visual_price = this.data.price / 100;
    this.visual_element_price = this.visual_price / this.data.elements;
  }

}
