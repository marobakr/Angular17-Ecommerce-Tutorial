import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { IProducts } from '../../../core/interfaces/http';
import { CartService } from '../../../core/service/cart.service';
import { NotifecationsService } from '../../../core/service/notifecations.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, ButtonModule, RouterLink, MessagesModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(
    private _cartService: CartService,
    private _notifecationsService: NotifecationsService
  ) {}
  isAddedToCart: boolean = false;
  @Input({ required: true }) isSmallCard: boolean = false;
  @Input({ required: true }) Products!: IProducts[];

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
