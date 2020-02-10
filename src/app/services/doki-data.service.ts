import { DokiSet } from './../contracts/doki.contract';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DokiDataService {

  constructor() { }

  getDokiSets() : DokiSet[] {
    return [
      {
        name: 'Łódź',
        symbol: '31093',
        category: 'city',
        price: 9300,
        elements: 394,
        image: 'https://zklockow.pl/img/1600/lego-city-60258-warsztat-tuningowy-1.jpg'
      },
      {
        name: 'Remiza w zimowej wiosce',
        symbol: '34433',
        category: 'city',
        price: 26500,
        elements: 1109,
        image: 'https://zklockow.pl/img/1600/lego-city-60258-warsztat-tuningowy-1.jpg'
      },
      {
        name: 'Cmentarz',
        symbol: '56012',
        category: 'other side',
        price: 11000,
        elements: 382,
        image: 'https://zklockow.pl/img/1600/lego-city-60258-warsztat-tuningowy-1.jpg'
      },
      {
        name: 'Koła',
        symbol: '9606',
        category: 'classic',
        price: 88,
        elements: 456,
        image: 'https://zklockow.pl/img/1600/lego-city-60258-warsztat-tuningowy-1.jpg'
      }      
    ];
  }
}
