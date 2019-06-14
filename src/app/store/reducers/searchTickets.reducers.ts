import * as fromBuscarPartes from '../actions/searchTickets.actions';
import { Parte } from 'src/app/models/parte.model';

export interface BuscarPartesState{
  parte: Parte[];
  termino: string;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial:BuscarPartesState =  {
  parte: null,
  termino: null,
  loaded: false,
  loading: false,
  error: null
};

export function buscarParteReducer(state = estadoInicial, action: fromBuscarPartes.buscadorParteAcciones):BuscarPartesState{
  switch(action.type){
    case fromBuscarPartes.CARGAR_PARTES:
      return {
        ...state,
        loaded:true,
        loading: false,
        error:null,
        termino: action.termino
        };
    case fromBuscarPartes.CARGAR_PARTES_SUCCESS:
      return {
        ...state,
        loaded:true,
        loading:false,
        error: null,
        parte:[...action.parte]
      };
    case fromBuscarPartes.CARGAR_PARTES_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
