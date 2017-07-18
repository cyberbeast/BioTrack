import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subjects-banner-card-id',
  templateUrl: './banner-card-id.component.html',
  styleUrls: ['./banner-card-id.component.css']
})
export class BannerCardIdComponent implements OnInit {
  @Input() biotrackID;

  constructor() { }

  ngOnInit() {
  }

}
