import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AgregarFilterAction } from 'src/app/store/actions';
import { SearchService } from '../search/search.service';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  datosbusqueda:any;

  constructor(public store:Store<AppState>,
              public searchservice:SearchService){
  }
  guardarTerminoStore(termino:string){
    this.store.dispatch(new AgregarFilterAction(termino));
  }
  recuperarPartes(termino:string){
    return this.searchservice.getPartesConFiltro(termino).pipe();
  }
}
