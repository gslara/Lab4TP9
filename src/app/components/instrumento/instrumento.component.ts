import { InstrumentoService } from './../../services/instrumento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  instrumento: any;

  constructor(private activatedRoute:ActivatedRoute, private service: InstrumentoService) {
    this.activatedRoute.params.subscribe(params => {
      this.instrumento = this.service.getOne(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
