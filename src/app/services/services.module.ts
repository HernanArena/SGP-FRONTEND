import { NgModule } from '@angular/core';
import { UsuarioService} from './index';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { SearchService } from './search/search.service';
import { FinderService } from './finder/finder.service';
import { SearchcodeService } from './searchcode/searchcode.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    UsuarioService,
    SearchService,
    FinderService,
    SearchcodeService
  ]
})
export class ServicesModule { }
