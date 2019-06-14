//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
//Routes
import { PAGES_ROUTING } from './pages-routing.module';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    HomeComponent,
    NewTicketComponent,
    AllTicketsComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTING,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,
    SearchComponent
  ]
})
export class PagesModule { }
