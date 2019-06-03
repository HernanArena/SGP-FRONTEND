import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PagesComponent } from './pages/pages.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
      path: '',
      component: PagesComponent,
      loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', redirectTo: '/login' }
];
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{useHash:true});
