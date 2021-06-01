import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  file: any = (data as any).default;

  constructor() {
    console.log(this.file);
  }

  public getAll(): any[] {
    return this.file.instrumentos;
    console.log(this.file.instrumentos);
  }

  public getOne(idx: string): any {
    for(let instrumento of this.file.instrumentos) {
      if(instrumento.id == idx) {
        return instrumento;
      }
    }
  }

}
