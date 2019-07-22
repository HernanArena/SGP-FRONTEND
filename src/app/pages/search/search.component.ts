import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { Filtro } from 'src/app/models/filtro.model'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy{


  partes:any = "";
  versiones:any[] =[];
  modulos:any[] = [];
  objetos:any[] = [];
  versionSubscription:Subscription;
  moduloSubscription:Subscription;
  storeSubscription:Subscription;

  //ngmodel
  _versionseleccionada:number;
  _moduloseleccionado:string;
  _objetoseleccionado:string;

  modulo:string;
  version:number;
  objeto:string;

  constructor(public _sp:SearchService,
              public store:Store<AppState>,
              private router:Router) {
    // this.moduloSubscription = this._sp.getmodulos().subscribe(modulos=>{
    //   this.modulos = modulos;
    // });
    //
    // this.versionSubscription = this._sp.getversiones().subscribe(versiones=>{
    //   this.versiones = versiones;
    // });
    //
    // this.storeSubscription = this.store.select('cargaresults').subscribe(data=>{
    //   if(data.oktonavigate){
    //      this.router.navigate(['/resultados']);
    //   }
    // });
    //
    // this.storeSubscription = this.store.select('filtro').subscribe(data=>{
    //   if (data.filtro.version) {
    //       this._versionseleccionada = data.filtro.version
    //   }
    // });
    //
    // this.storeSubscription = this.store.select('filtro').subscribe(data=>{
    //   if (data.filtro.modulo) {
    //       this._moduloseleccionado = data.filtro.modulo;
    //       this.recuperarModulos(this._moduloseleccionado);
    //   }
    // });
    //
    // this.storeSubscription = this.store.select('filtro').subscribe(data=>{
    //   if (data.filtro.objeto) {
    //       this._objetoseleccionado = data.filtro.objeto
    //   }
    // });

  }

  ngOnInit() {
  };

  recuperarVersion(version:number){
    if(version){
      this.version = version;
    }
  }
  recuperarModulos(modulo:string){
    this.modulo = modulo;
    this.objetos = this._sp.getObjetosConFiltro(modulo);
  }
  recuperarObjeto(objeto:string){
    this.objeto = objeto;
  }

  grabaFiltroVersion(version:number){
    this.recuperarVersion(version);

    if (this.store.select('filtro') == null ) {
        let filtros = new Filtro(version,this.modulo,this.objeto,"");
        this._sp.cargarFiltrosStore(filtros);
    }
    this._sp.AgregarVersionStore(version);
  }

  grabaFiltroObjeto(objeto:string){
    this.recuperarObjeto(objeto);

    if (this.store.select('filtro') == null ) {
        let filtros = new Filtro(this.version,this.modulo,objeto,"");
        this._sp.cargarFiltrosStore(filtros);
    }
    this._sp.AgregarObjetoStore(this.modulo, objeto);
  }



  ngOnDestroy(): void {
    this.moduloSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }
}
