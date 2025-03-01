import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { IProducts } from '../../../core/interfaces/http';
import { CartService } from '../../../core/service/cart.service';
import { EmptyComponent } from '../../empty/empty.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, ButtonModule, RouterLink, MessagesModule, EmptyComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private _cartService: CartService) {}
  isAddedToCart: boolean = false;
  @Input({ required: true }) isSmallCard: boolean = false;
  @Input({ required: true }) Products!: IProducts[];
  @Input() searchKey: string = '';

  addToCart(product: IProducts) {
    this._cartService.addToCart(product);
  }
}
