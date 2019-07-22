import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  _validations:any[]= [];

  constructor() { }

  addValidation(validations:any, minLength:any){
    console.log(validations);

    for(let validators of validations){
      switch(validators){
        case "required":
            this._validations.push(Validators.required);
          break;
        case "minLength":
          this._validations.push(Validators.minLength(minLength));
           break;
        case "email":
          this._validations.push(Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"));
         break;
      }

    }
    return this._validations;
  }
}
