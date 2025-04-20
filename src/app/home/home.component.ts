import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService, Phone } from '../services/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  phones: Phone[] = [];
  filteredPhones: Phone[] = [];

  constructor(private router: Router, private phoneService: PhoneService) {}

  ngOnInit() {
    this.phones = this.phoneService.getPhones();
    this.filteredPhones = [...this.phones];
  }

  filterPhones(term: string) {
    this.filteredPhones = term
      ? this.phones.filter(p => p.name.toLowerCase().includes(term))
      : [...this.phones];
  }

  goToDetails(phone: Phone) {
    this.router.navigate(['/product-details', phone.id]);
  }
  getCoupon() {
    this.router.navigate(['/plans']);
  }
}