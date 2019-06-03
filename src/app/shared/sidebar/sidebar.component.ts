import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromUsuario from 'src/app/store/reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario:Usuario;

  constructor(private store:Store<AppState>,
              public _sidebar:SidebarService) { }

  ngOnInit() {
    this.store.select('usuario').subscribe((data:fromUsuario.UsuarioState)=>{
      this.usuario = data.user;
     });
     // this._sidebar.cargarMenu();
     this._sidebar.menu;
  }

}
