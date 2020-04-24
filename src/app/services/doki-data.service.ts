import { DokiSet } from './../contracts/doki.contract';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DokiDataService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getPath(category: string) {
    switch(category) {
      case 'otherside': return 'https://zklockow.pl/lego-hidden-side';
      default: return 'https://zklockow.pl/lego-creator';
    }
  }

  getDokiSetsWeb(category?: string): Observable<DokiSet> {
    return this.httpClient.get(this.getPath(category), {responseType: 'text'})
    .pipe(flatMap(data => {

      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(data, 'text/html');
      const items = Array.from(parsedHtml.getElementsByClassName('Pr'));

      console.log('Pobrano elementów: ' + items.length);

      return items.filter(x => x.tagName === "DIV").map(x => this.parseDokiSets(x));
    }));
  }

  parseDokiSets(item: Element): DokiSet {

    const parts = item.getElementsByClassName('Na')[0].textContent.split(' ');
    const symbolPosition = this.getSymbolPosition(parts);
    const img = item.getElementsByTagName('img')[0];

    return {
      name: this.getName(parts, symbolPosition),
      symbol: parts[symbolPosition],
      category: this.getCategory(parts, symbolPosition),
      price: this.parsePrice(item),
      elements: this.getElementsNumber(item),
      image: img.getAttribute('data-pagespeed-lazy-src') || 'https://zklockow.pl/' + img.getAttribute('src')
    };

  }
  getElementsNumber(item: Element): number {
    return +item.getElementsByClassName('pd')[0].children[3].textContent;
  }

  getName(parts: string[], symbolPosition: number) {
    return this.joinParts(parts, symbolPosition + 1, parts.length);
  }

  getCategory(parts: string[], symbolPosition: number) {
    return this.joinParts(parts, 1, symbolPosition);
  }

  joinParts(parts: string[], from: number, to: number) {
    return parts.slice(from, to).filter(x => x.length > 0).reduce((acc, v) => acc + ' ' + v);
  }

  getSymbolPosition(parts: string[]) {
    return parts.slice(1).findIndex(this.isSymbolNumber) + 1;
  }

  isSymbolNumber(value: string): boolean {
    return +value > 100;
  }

  parsePrice(item: Element): number {
    const raw = item.getElementsByClassName('pp');
    if(raw.length == 0) return 0;
    const priceText = raw[0].textContent;
    const price = +priceText.replace('od ', '').replace(' zł', '').replace(',', '.');
    return price * 100;
  }
}
