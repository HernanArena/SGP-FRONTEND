import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder/finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { FloatingInputComponent } from './floating-input/floating-input.component';


@NgModule({
  declarations: [
    FinderComponent,
    ModalComponent,
    FloatingInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FinderComponent,
    ModalComponent,
    FloatingInputComponent
  ]
})
export class ComponentsModule { }
