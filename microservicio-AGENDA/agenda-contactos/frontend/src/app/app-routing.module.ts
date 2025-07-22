import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/contactos', pathMatch: 'full' },
  { path: 'categorias', component: CategoryListComponent },
  { path: 'categorias/nueva', component: CategoryFormComponent },
  { path: 'categorias/editar/:id', component: CategoryFormComponent },
  { path: 'contactos', component: ContactListComponent },
  { path: 'contactos/nuevo', component: ContactFormComponent },
  { path: 'contactos/editar/:id', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
