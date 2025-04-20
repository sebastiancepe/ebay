import { Injectable } from '@angular/core';

export interface Phone {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phones: Phone[] = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      price: 1199,
      image: 'https://www.clevercel.co/cdn/shop/files/Portadas_iPhone14ProMax.webp?v=1744750834',
      description: 'Fully tested and certified iPhone 14 Pro Max. Space Black. Unlocked.'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      price: 999,
      image: 'https://http2.mlstatic.com/D_NQ_NP_982028-MLA73067605286_112023-O.webp',
      description: 'Latest Galaxy S23 Ultra with 200MP camera. Unlocked and in excellent condition.'
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: 899,
      image: 'https://http2.mlstatic.com/D_NQ_NP_984389-MLA74807971605_022024-O.webp',
      description: 'Google’s newest flagship with AI features and pure Android experience.'
    }
  ];

  getPhones(): Phone[] {
    return this.phones;
  }

  getPhoneById(id: number): Phone | undefined {
    return this.phones.find(p => p.id === id);
  }
}