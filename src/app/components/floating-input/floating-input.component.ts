import { Component, OnInit, Input } from '@angular/core';
import { Codigo } from 'src/app/models/codigo.model';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-floating-input',
  templateUrl: './floating-input.component.html',
  styleUrls: ['./floating-input.component.css']
})
export class FloatingInputComponent implements OnInit {

  forma:FormGroup;
  @Input() required:boolean = false;
  @Input() floating:boolean = true;
  @Input() placeholder:string = ''

  selected:string;
  itemSelect: Codigo[]=[];
  _selected:string;

  constructor() {

    this.forma = new FormGroup({
      inputFloating: new FormControl('')
    });

  }

  ngOnInit() {
  }

}
