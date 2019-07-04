import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder/finder.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [FinderComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FinderComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
