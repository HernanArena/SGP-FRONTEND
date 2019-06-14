import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromReducers from './reducers';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState{
  ui: fromReducers.UIState;
  usuario:fromReducers.UsuarioState;
  filtro:fromReducers.filterState;
  parte: fromReducers.BuscarPartesState;
}

export const appReducers:ActionReducerMap<AppState>= {
  ui: fromReducers.uiReducers,
  usuario: fromReducers.usuarioReducer,
  filtro:fromReducers.filterReducers,
  parte: fromReducers.buscarParteReducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['usuario','filtro','parte'],rehydrate:true})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
