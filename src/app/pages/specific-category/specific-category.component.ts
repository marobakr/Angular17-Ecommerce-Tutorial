import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../core/interfaces/http';
import { CategoryService } from '../../core/service/category.service';
import { CardComponent } from '../../shared/card/card/card.component';

@Component({
  selector: 'app-specific-category',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './specific-category.component.html',
  styleUrl: './specific-category.component.scss',
})
export class SpecificCategoryComponent {
  constructor(
    private _categoryService: CategoryService,
    private _activatedRoute: ActivatedRoute
  ) {}
  categoryType: string = '';
  products: IProducts[] = [];
  ngOnInit(): void {
    this.categoryType =
      this._activatedRoute.snapshot.paramMap.get('type') ?? '';
    this.getSpecificCategory(this.categoryType);
  }

  getSpecificCategory(type: string) {
    this._categoryService
      .getSpecificCategory(type)
      .subscribe((next) => (this.products = next.products));
  }
}
