import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donde-estamos', component: DondeEstamosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'instrumento/:id', component: InstrumentoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
