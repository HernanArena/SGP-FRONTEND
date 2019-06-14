import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  titulo:string;
  descrip:string;

  constructor(public router:Router,
              private meta:Meta) {
                console.log("!0");
    this.getDataRoute()
    .subscribe( data =>{
      console.log("!2");
       console.log(data.titulo);
       if(data.titulo){
         this.titulo = data.titulo;
         this.descrip = data.descrip;
        const metaTag:MetaDefinition = {
          name: 'Description',
          content: this.titulo
        };
        this.meta.updateTag(metaTag);
       }

    });

  }
  ngOnInit(){
  }
  getDataRoute(){
    console.log("!1");
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild ==null),
      map((evento:ActivationEnd) => evento.snapshot.data)
    )

  }

}
