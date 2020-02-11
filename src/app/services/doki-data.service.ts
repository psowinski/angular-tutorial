import { DokiSet } from './../contracts/doki.contract';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DokiDataService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

   getDokiSetsWeb(callback: (data: DokiSet[]) => void) {
    this.httpClient.get('https://zklockow.pl/lego-creator?o=9', {responseType: 'text'}).subscribe(zzz =>
    this.httpClient.get('https://zklockow.pl/lego-creator', {responseType: 'text'})
    .subscribe(data => {

      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(data, 'text/html');
      let items = parsedHtml.getElementsByClassName("prod_h");
      
      console.log('Pobrano elementów: ' + items.length);

      let sets: DokiSet[] = [];
      for (let i = 0; i < items.length; i++) {
        sets.push(this.parseDokiSets(items[i]));
      }
      callback(sets);
    }));
  }

  parseDokiSets(item: Element) : DokiSet {

    let parts = item.getElementsByClassName("pn")[0].textContent.split(' ');
    let symbolPosition = this.getSymbolPosition(parts);

    return {
      name: this.getName(parts, symbolPosition),
      symbol: parts[symbolPosition],
      category: this.getCategory(parts, symbolPosition),
      price: this.parsePrice(item),
      elements: this.getElementsNumber(item),
      image: this.imageUrlPrefix(item.getElementsByTagName('img')[0].getAttribute('src'))
    };
  }

  imageUrlPrefix(url: string): string {
    let addr = 'https://zklockow.pl';
    if(url[0] !== '/')
      addr = addr + '/';
    return addr + url;
  }

  getElementsNumber(item: Element): number {
    return +item.getElementsByClassName("pd")[0].children[1].textContent;
  }

  getName(parts: string[], symbolPosition: number) {
    return this.joinParts(parts, symbolPosition + 1, parts.length);
  }

  getCategory(parts: string[], symbolPosition: number) {
    return this.joinParts(parts, 1, symbolPosition);
  }

  joinParts(parts: string[], from: number, to: number) {
    let text = '';
    for(let i = from; i < to; ++i) {
      if(text.length > 0) {
        text = text + ' ';
      }
      text = text + parts[i];
    }
    return text;
  }

  getSymbolPosition(parts: string[]) {
    for(let i = 1; i < parts.length; ++i) {
      if(this.isSymbolNumber(parts[i]))
        return i;
    }
    return 0;
  }

  isSymbolNumber(value: string): boolean
  {
    return +value > 100;
  }

  parsePrice(item: Element) : number {
    let priceText = item.getElementsByClassName("pp")[0].textContent;
    let price = +priceText.replace('od ', '').replace(' zł', '').replace(',', '.');
    return price * 100;
  }

  getTestData() : DokiSet[] {

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
        price: 8800,
        elements: 456,
        image: 'https://zklockow.pl/img/1600/lego-city-60258-warsztat-tuningowy-1.jpg'
      }      
    ];
  }
}
