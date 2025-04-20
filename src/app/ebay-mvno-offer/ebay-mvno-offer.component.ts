import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ebay-mvno-offer',
  templateUrl: './ebay-mvno-offer.component.html',
  standalone: false,
  styleUrls: ['./ebay-mvno-offer.component.css']
})
export class EbayMvnoOfferComponent implements OnInit {
  selectedProduct: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedProduct = params['product'];
    });
  }
}