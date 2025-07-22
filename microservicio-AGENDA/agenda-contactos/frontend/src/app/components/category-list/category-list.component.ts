import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorias: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoryService.getCategorias()
      .subscribe(categorias => this.categorias = categorias);
  }

  eliminarCategoria(id: number): void {
    this.categoryService.eliminarCategoria(id)
      .subscribe(() => {
        this.categorias = this.categorias.filter(c => c.id !== id);
      });
  }
}
