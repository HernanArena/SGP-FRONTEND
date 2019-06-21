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
  partespaginados:Parte[];


  constructor(public store:Store<AppState>) {
    this.initResults();
    this.modificarOktonavigate();
  }

  ngOnInit() {
  }
  initResults(){
    this.storeSubscription = this.store.select('cargaresults').subscribe( data =>{
      this.partes = data.parte;
      this.partespaginados = this.recuperarPartes(1);
    })
  }

  recuperarPartes(pagina:number){

    let parteinicial:number;
    let topepagina:number = 5;
    let partespaginados:Parte[] = [];
    let i:number = 1

    parteinicial = pagina*topepagina-(topepagina-1)
    i = parteinicial
    console.log(i);
    do{
      partespaginados.push(this.partes[i]);
      i = i + 1

    }
    while(i<=topepagina);

    return partespaginados;
  }
  modificarOktonavigate(){
    this.store.dispatch(new ModificarOkToNavigate(false));
  }

}
