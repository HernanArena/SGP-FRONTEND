import { Component, OnInit, Input } from '@angular/core';
import { Codigo } from 'src/app/models/codigo.model';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SearchcodeService } from 'src/app/services/searchcode/searchcode.service';
import { ValidationService } from 'src/app/services/validation/validation.service';


@Component({
  selector: 'app-floating-input',
  templateUrl: './floating-input.component.html',
  styleUrls: ['./floating-input.component.css']
})
export class FloatingInputComponent implements OnInit {

  forma:FormGroup;
  @Input() required:boolean = false;
  @Input() floating:boolean = true;
  @Input() placeholder:string = 'Objeto';
  @Input() arrayItem:Codigo[]=[]

  errorCode:string;
  selected:string;
  itemSelect: Codigo[]=[];
  _selected:string;

  constructor(public _scs:SearchcodeService,public _vs:ValidationService) {
    this.init();
  }

  ngOnInit() {

  }
  private guardarCambios(){
    console.log(this.forma.value);
      console.log(this.forma);
  }
  private init(){
    let validation = this._vs.addValidation(['required','minLength'],3)
    this.forma = new FormGroup({
      'inputFloating': new FormControl('',validation)
    });
    //this._vs.addValidation(['required','minLength'],this.forma.controls['inputFloating'],3);
  }
  recupera(data){
    this.arrayItem = [];
    this.forma.controls['inputFloating'].setValue(data);

//this._errorCode = data;
/*this.forma.reset({
  inputFloating:""
})*/

    console.log(data);
  }
  recuperarError(errorData:string){
    if(errorData){
      this.errorCode = errorData;
      if(errorData.length>=6){
        this._scs.getCodigoError(errorData).subscribe(data => {
          console.log(data);
          this.arrayItem = data
        });
      }else{
        this.arrayItem = [];
      }
    }
  }


}
