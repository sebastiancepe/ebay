import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayMvnoOfferComponent } from './ebay-mvno-offer.component';

describe('EbayMvnoOfferComponent', () => {
  let component: EbayMvnoOfferComponent;
  let fixture: ComponentFixture<EbayMvnoOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbayMvnoOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbayMvnoOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
