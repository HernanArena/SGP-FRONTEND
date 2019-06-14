import{ Action } from '@ngrx/store'
import { Filtro } from '../../models/filtro.model';


export const CARGAR_FILTER = '[FILTER cargar] Cargar filtro..';
export const LIMPIAR_FILTER = '[FILTER limpiar] filtro borrado';
export const AGREGAR_FILTER = '[FILTER Agregar] Agregar termino';

export class CargarFilterAction implements Action {
  readonly type = CARGAR_FILTER;
  constructor(public filtro:Filtro){}
}
export class AgregarFilterAction implements Action {
  readonly type = AGREGAR_FILTER;
  constructor(public termino:string){}
}
export class LimpiarFilterAction implements Action{
  readonly type = LIMPIAR_FILTER;
}

export type filterAcciones = CargarFilterAction | LimpiarFilterAction | AgregarFilterAction;
