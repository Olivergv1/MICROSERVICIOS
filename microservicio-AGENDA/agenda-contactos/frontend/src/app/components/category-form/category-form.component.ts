import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoria: any = { nombre: '' };
  esEdicion = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.categoryService.getCategoria(+id)
        .subscribe(categoria => this.categoria = categoria);
    }
  }

  guardarCategoria(): void {
    if (this.esEdicion) {
      this.categoryService.actualizarCategoria(this.categoria.id, this.categoria)
        .subscribe(() => this.router.navigate(['/categorias']));
    } else {
      this.categoryService.crearCategoria(this.categoria)
        .subscribe(() => this.router.navigate(['/categorias']));
    }
  }
}
