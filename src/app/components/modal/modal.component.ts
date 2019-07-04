import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public _ms:ModalService) { }

  ngOnInit() {
  }
  cerrarModal(){
    this._ms.ocultarModal();
  }


}
