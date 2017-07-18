import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subjects-banner-card-supplier',
  templateUrl: './banner-card-supplier.component.html',
  styleUrls: ['./banner-card-supplier.component.css']
})
export class BannerCardSupplierComponent implements OnInit {
  @Input() supplier;
  
  constructor() { }

  ngOnInit() {
  }

}
