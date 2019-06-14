
import * as fromFilterActions from '../actions/filter.actions';
import { Filtro } from 'src/app/models/filtro.model';

export interface filterState {
  filtro: Filtro;
};

const initState: filterState = {
  filtro:null
};

export function filterReducers (state:filterState = initState,action: fromFilterActions.filterAcciones):filterState{
  switch(action.type){
    case fromFilterActions.CARGAR_FILTER:
      return {
        filtro: {...action.filtro}
      };
    case fromFilterActions.LIMPIAR_FILTER:
      return {
        filtro: null
      };
    case fromFilterActions.AGREGAR_FILTER:
      return {

        filtro: {...state.filtro,
          termino: action.termino
        }
      };
    default:
      return state;
  }
}
