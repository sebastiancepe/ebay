import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  phones = [
    {
      name: 'iPhone 14 Pro Max',
      price: 1199,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHMmCPsxPvdh3Cia7lNS8_qfc8-W3ojdbTg&s'
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      price: 999,
      image: 'https://carulla.vtexassets.com/arquivos/ids/17336594/celular-samsung-galaxy-s23-ultra-5g-256-g-verde.jpg?v=638608909718770000'
    },
    {
      name: 'Google Pixel 8 Pro',
      price: 899,
      image: 'https://http2.mlstatic.com/D_NQ_NP_984389-MLA74807971605_022024-O.webp'
    }
  ];

  filteredPhones = [...this.phones];

  constructor(private router: Router) {}

  filterPhones(term: string) {
    if (!term) {
      this.filteredPhones = [...this.phones];
    } else {
      this.filteredPhones = this.phones.filter(phone =>
        phone.name.toLowerCase().includes(term)
      );
    }
  }

  goToOffer(phone: any) {
    this.router.navigate(['/mvno-offer'], { queryParams: { product: phone.name } });
  }
}