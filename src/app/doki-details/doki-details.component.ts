import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doki-details',
  templateUrl: './doki-details.component.html',
  styleUrls: ['./doki-details.component.scss']
})
export class DokiDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  dokiId: string

  ngOnInit() {
    this.dokiId = this.route.snapshot.params['id'];
  }

}
