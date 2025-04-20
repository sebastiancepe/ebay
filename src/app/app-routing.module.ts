import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EbayMvnoOfferComponent } from './ebay-mvno-offer/ebay-mvno-offer.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'mvno-offer', component: EbayMvnoOfferComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
