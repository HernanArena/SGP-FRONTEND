import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public tipo:string;
  public id:string;

  public oculto:string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() { }

  ocultarModal(){
    this.oculto = 'oculto';
    console.log(this.oculto)
    this.tipo = null;
    this.id = null;

  }
  mostrarModal(tipo:string,id:string){
    this.oculto = '';
    this.tipo = tipo;
    this.id = id;
    console.log(this.oculto);
  }
}
