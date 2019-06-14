import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Parte } from 'src/app/models/parte.model';
import { ModificarOkToNavigate } from 'src/app/store/actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  partes:Parte[];
  storeSubscription:Subscription;

  constructor(public store:Store<AppState>) {
    this.initResults();
    this.modificarOktonavigate();
  }

  ngOnInit() {
  }
  initResults(){
    this.storeSubscription = this.store.select('cargaresults').subscribe( data =>{
      this.partes = data.parte;
    })

  }
  modificarOktonavigate(){
    this.store.dispatch(new ModificarOkToNavigate(false));
  }

}
