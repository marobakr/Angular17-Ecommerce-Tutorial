import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IProducts } from '../../core/interfaces/http';
import { SearchNamePipe } from '../../core/pipes/search-name.pipe';
import { CartService } from '../../core/service/cart.service';
import { ProductsService } from '../../core/service/products.service';
import { CardComponent } from '../../shared/card/card/card.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardComponent,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    SearchNamePipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private _productsService: ProductsService,
    private _cart: CartService
  ) {}
  allProducts: IProducts[] = [];
  searchKey: string = '';

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(): void {
    this._productsService.allProducts().subscribe((response: any) => {
      this.allProducts = response.products.map((product: IProducts) => {
        return {
          ...product,
          isAddedToCart: this._cart.isAddedToCart(product) || false,
        };
      });
    });
  }
}
