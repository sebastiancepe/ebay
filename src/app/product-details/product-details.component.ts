import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService, Phone } from '../services/phone.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  phone: Phone | undefined;
  selectedOption: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.phone = this.phoneService.getPhoneById(id);

    if (!this.phone) {
      this.router.navigate(['/']); // fallback si el ID no existe
    }
  }
  
  selectOption(option: string): void {
    this.selectedOption = this.selectedOption === option ? null : option;
  }
}
