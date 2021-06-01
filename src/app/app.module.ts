import { InstrumentoService } from './services/instrumento.service';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstrumentoComponent,
    HomeComponent,
    ProductosComponent,
    DondeEstamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
