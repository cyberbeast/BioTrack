import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subjects-banner-card-cab-id',
  templateUrl: './banner-card-cab-id.component.html',
  styleUrls: ['./banner-card-cab-id.component.css']
})
export class BannerCardCabIdComponent implements OnInit {
  @Input() cabID;

  constructor() { }

  ngOnInit() {
  }

}
