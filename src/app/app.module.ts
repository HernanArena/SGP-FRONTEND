import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//@Ngrx
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AllEffects } from './store/effects';

//environment
import { environment } from 'src/environments/environment';

//Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PagesComponent } from './pages/pages.component';

//Routes
import { APP_ROUTING } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    SharedModule,
    RouterModule,
    ServicesModule,
    StoreModule.forRoot(appReducers,{metaReducers}),
    EffectsModule.forRoot(AllEffects),
    StoreDevtoolsModule.instrument({
     maxAge: 25, // Retains last 25 states
     logOnly: environment.production, // Restrict extension to log-only mode
   })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
