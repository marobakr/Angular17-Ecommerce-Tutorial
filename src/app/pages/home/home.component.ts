import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { IProducts } from '../../core/interfaces/http';
import { PopularPipe } from '../../core/pipes/popular.pipe';
import { UserDataService } from '../../core/service/user-data.service';
import { CardComponent } from '../../shared/card/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, CardComponent, PopularPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private _userData: UserDataService) {}
  images: any[] | undefined;
  smallProducts!: IProducts[];
  popularProducts!: IProducts[];
  ngOnInit() {
    this.images = [
      {
        itemImageSrc: './assets/product-1.jpg',
        alt: 'Description for Product 1',
        title: 'product 1',
      },
      {
        itemImageSrc: './assets/product-2.jpg',
        alt: 'Description for Product 1',
        title: 'product 1',
      },
      {
        itemImageSrc: './assets/product-3.jpg',
        alt: 'Description for Product 1',
        title: 'product 1',
      },
      {
        itemImageSrc: './assets/product-4.jpg',
        alt: 'Description for Product 1',
        title: 'product 1',
      },
    ];
    this.getAllProducts();
  }

  getAllProducts(): void {
    this._userData.allProducts().subscribe((next) => {
      this.smallProducts = next.products.slice(0, 4);
      this.popularProducts = next.products;
    });
  }
}
