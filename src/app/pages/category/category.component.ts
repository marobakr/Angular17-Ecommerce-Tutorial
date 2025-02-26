import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../core/service/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',

  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(private _categoryService: CategoryService) {}
  allCategory: string[] = [];
  ngOnInit(): void {
    this.displayAllCategory();
  }
  displayAllCategory() {
    this._categoryService
      .getAllCategory()
      .subscribe((next) => (this.allCategory = next.categories));
  }

  getImageCategory(type: string): string {
    return `./assets/categories/${type}.jpg`;
  }
}
