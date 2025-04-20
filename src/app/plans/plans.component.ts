import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: false,
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  plans = [
    { label: '6 GB/mo', price: 29.99, details: 'Unlimited minutes\nUnlimited SMS\n1-year plan' },
    { label: '12 GB/mo', price: 44.99, details: 'Unlimited minutes\nUnlimited SMS\n1-year plan' },
    { label: '25 GB/mo', price: 69.99, details: 'Unlimited minutes\nUnlimited SMS\n1-year plan' }
  ];

}
