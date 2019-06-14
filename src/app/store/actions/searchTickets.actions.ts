import {Action} from '@ngrx/store';
import { Parte } from 'src/app/models/parte.model';

export const CARGAR_PARTES = '[DownloadTickets buscadorPartes] buscar partes';
export const CARGAR_PARTES_FAIL = '[DownloadTickets buscadorPartes] buscar partes FAIL';
export const CARGAR_PARTES_SUCCESS = '[DownloadTickets buscadorPartes] buscar partes SUCCESS';

//buscar
export class CargarPartes implements Action{
  readonly type = CARGAR_PARTES;
  constructor(public termino?:string){}
}

export class CargarPartesFail implements Action{
  readonly type = CARGAR_PARTES_FAIL;
  constructor(public payload:any){}
}

export class CargarPartesSuccess implements Action{
  readonly type = CARGAR_PARTES_SUCCESS;
  constructor(public parte:Parte[]){}
}


export type buscadorParteAcciones = CargarPartes |
                              CargarPartesFail|
                              CargarPartesSuccess;
