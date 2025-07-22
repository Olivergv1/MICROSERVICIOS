import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactos: any[] = [];
  categorias: any[] = [];

  constructor(
    private contactService: ContactService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getContactos();
    this.getCategorias();
  }

  getContactos(): void {
    this.contactService.getContactos()
      .subscribe(contactos => this.contactos = contactos);
  }

  getCategorias(): void {
    this.categoryService.getCategorias()
      .subscribe(categorias => this.categorias = categorias);
  }

  getNombreCategoria(idCategoria: number): string {
    const categoria = this.categorias.find(c => c.id === idCategoria);
    return categoria ? categoria.nombre : '';
  }

  eliminarContacto(id: number): void {
    this.contactService.eliminarContacto(id)
      .subscribe(() => {
        this.contactos = this.contactos.filter(c => c.id !== id);
      });
  }
}
