import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import {Filtro} from 'src/app/models/filtro.model'
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
  modulos:any[] = [];
  objetos:any[] = [];
  moduloSubscription:Subscription;
  storeSubscription:Subscription;

  modulo:string;
  version:number;


  constructor(public _sp:SearchService,
              public store:Store<AppState>,
              private router:Router) {
    this.moduloSubscription = this._sp.getmodulos().subscribe(modulos=>{
      this.modulos = modulos;
    });
    this.storeSubscription = this.store.select('parte').subscribe(data=>{
      if(data.loaded){
         this.router.navigate(['/resultados']);
      }
    });
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
  grabaFiltros(objeto:string){
    let filtros = new Filtro(this.version,this.modulo,objeto,"");
    this._sp.guardarFiltrosStore(filtros);
  }
  ngOnDestroy(): void {
    this.moduloSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }
}
