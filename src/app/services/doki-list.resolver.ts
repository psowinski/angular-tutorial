import { DokiDataService } from './doki-data.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map, reduce, toArray } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DokiSet } from '../contracts/doki.contract';
import { Subject } from 'rxjs';

@Injectable()
export class DokiListResolver implements Resolve<DokiSet[]> {
    constructor(private service: DokiDataService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const delay = 1000;
        
        let subject = new Subject<DokiSet[]>()
        this.service.getDokiSetsWeb(route.params['id']).pipe(toArray()).subscribe(data => {
            setTimeout(() => { 
                subject.next(data);
                subject.complete();
                console.log(`Data delay: ${delay} ms`);
            }, delay);

            //intervals
            // let idx = 0;
            // setInterval(() => {
            //     if(data.length > idx) {
            //         subject.next(data[idx]);
            //         idx++;
            //         console.log(idx);
            //     }
            //     else
            //         subject.complete();
            // }, 100);
        });
        return subject;
        //return subject.pipe(toArray());  
    }
}
