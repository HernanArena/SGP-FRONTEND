import { Component, OnInit } from '@angular/core';
import { Codigo } from 'src/app/models/codigo.model';
import { SearchcodeService } from 'src/app/services/searchcode/searchcode.service';
import { ModalService } from 'src/app/services/modal/modal.service';


@Component({
  selector: 'app-searchcode',
  templateUrl: './searchcode.component.html',
  styleUrls: ['./searchcode.component.css']
})
export class SearchcodeComponent implements OnInit {

  errorCode:string;
  codigoSelect: Codigo[]=[];
  _errorCode:string;

  constructor(public _scs:SearchcodeService, public _ms:ModalService) { }


  ngOnInit() {
  }

  recuperarError(errorData:string){
    if(errorData){
      this.errorCode = errorData;
      if(errorData.length>=6){
        this._scs.getCodigoError(errorData).subscribe(data => {
          console.log(data);
          this.codigoSelect = data
        });
      }else{
        this.codigoSelect = [];
      }
    }
  }
  recupera(data){
    this.codigoSelect = [];
    this._errorCode = data;

    console.log(data);
  }
  mostrarModal(){
    this._ms.mostrarModal('','');
  }


}
