import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IProducts } from '../../core/interfaces/http';
import { CartService } from '../../core/service/cart.service';
import { NotifecationsService } from './../../core/service/notifecations.service';

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
    private _cartService: CartService,
    private _notifecationsService: NotifecationsService
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
      this.productDetails = data.details.product;
    });
  }
  addToCart(productId: string) {
    const userId = localStorage.getItem('token') ?? '';
    this._cartService.addToCart({ userId, productId }).subscribe((next) => {
      this._notifecationsService.showSuccess('success', next.message);
      this._cartService.countOfCart.next(next.cart.length);
      this.isAddedToCart = true;

      const storedCart = localStorage.getItem('cartState');
      const cartState = storedCart ? JSON.parse(storedCart) : {};

      cartState[productId] = true;
      localStorage.setItem('cartState', JSON.stringify(cartState));
    });
  }
}
