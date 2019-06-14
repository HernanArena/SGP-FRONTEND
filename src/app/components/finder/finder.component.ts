import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FinderService } from 'src/app/services/finder/finder.service';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})

export class FinderComponent implements OnInit {

  @Input () modulo:string;
  @Input () objeto:string;
  @Input () version:string;

  partes:any;
  datosbusquedalocalstorage:any;
  default:string;
  _termino:string;

  constructor(private finderservice:FinderService,
              private router:Router) {
    this.finderservice.cargarStorage();
    this.datosbusquedalocalstorage = this.finderservice.datosbusqueda;
    this.default = localStorage.getItem('default');

    if (this.default == "true") {
      this._termino = this.datosbusquedalocalstorage.termino;
    }
  }

  ngOnInit() {
  }

  // buscar(termino:string, modulo:string, objeto:string, version:string){
  //   this.datosbusqueda = {
  //     modulo:modulo,
  //     objeto:objeto,
  //     version:version,
  //     termino:termino
  //   }
  //   this.finderservice.guardarStorage(this.datosbusqueda);
  //   this.partes = this.searchservice.getpartesconfiltro(termino);
  // }

  navegararesultsyguardarstorage(){
    let modulo:string;
    let objeto:string;
    let version:string;
    let termino:string;

     //Si el dato no viene en el @input, lo recupera del localStorage
    if( this.modulo == null){
      modulo = this.datosbusquedalocalstorage.modulo;
      objeto = this.datosbusquedalocalstorage.objeto;
      version = this.datosbusquedalocalstorage.version;
      termino  = this.datosbusquedalocalstorage.termino;
    }
    else {
      modulo = this.modulo;
      objeto = this.objeto;
      version = this.version;
      termino  = this._termino;
    }

    //Se usa dentro de un componente
    let datosbusqueda = {
      modulo: modulo,
      objeto: objeto,
      version: version,
      termino: termino
    }

    console.log(datosbusqueda);
    this.finderservice.guardarStorage(datosbusqueda);
    this.router.navigate(['/resultados']);
  }

  recuperarterminoprecargado(){
    let datosbusqueda:any = localStorage.getItem('datosbusqueda');
    //console.log(datosbusqueda.termino);
    return datosbusqueda.termino;
  }
}
