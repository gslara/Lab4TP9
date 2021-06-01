import { InstrumentoService } from './../../services/instrumento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];

  constructor(private service:InstrumentoService, private router: Router) { }

  ngOnInit(): void {
    this.productos = this.service.getAll();
    console.log(this.productos);
  }

  public verInstrumento(idx: string) {
    console.log("id del Instrumento: " + idx);
    this.router.navigate(['/instrumento/' + idx]);
  }

}
