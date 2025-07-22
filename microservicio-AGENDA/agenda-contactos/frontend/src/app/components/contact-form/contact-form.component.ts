import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contacto: any = { nombre: '', telefono: '', idCategoria: null };
  categorias: any[] = [];
  esEdicion = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategorias();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.contactService.getContacto(+id)
        .subscribe(contacto => this.contacto = contacto);
    }
  }

  getCategorias(): void {
    this.categoryService.getCategorias()
      .subscribe(categorias => this.categorias = categorias);
  }

  guardarContacto(): void {
    if (this.esEdicion) {
      this.contactService.actualizarContacto(this.contacto.id, this.contacto)
        .subscribe(() => this.router.navigate(['/contactos']));
    } else {
      this.contactService.crearContacto(this.contacto)
        .subscribe(() => this.router.navigate(['/contactos']));
    }
  }
}
