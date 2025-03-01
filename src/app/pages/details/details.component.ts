import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IProducts } from '../../core/interfaces/http';
import { CartService } from '../../core/service/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  constructor(
    private _activateRoute: ActivatedRoute,
    private _cartService: CartService
  ) {}
  id: string = '';
  productDetails!: IProducts;
  isAddedToCart: boolean = false;
  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(
      (next: any) => (this.id = next.params['id'])
    );
    this.displayDetails();
  }
  displayDetails(): void {
    this._activateRoute.data.subscribe((data: any) => {
      this.productDetails = {
        ...data.details.product,
        isAddedToCart: this._cartService.isAddedToCart(data.details.product),
      };
    });
  }
  addToCart(product: IProducts) {
    this._cartService.addToCart(product);
  }
}
