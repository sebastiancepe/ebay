import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EbayMvnoOfferComponent } from './ebay-mvno-offer/ebay-mvno-offer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'mvno-offer', component: EbayMvnoOfferComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent,   
    data: {
    render: false} },
  { path: 'plans', component: PlansComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
