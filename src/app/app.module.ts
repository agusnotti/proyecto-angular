//modulo principal de angular, que permite iniciar la aplicacion. es leido por el main.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Saludo } from './primerComponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { PruebaComponent } from './prueba/prueba.component';
import { UserComponent } from './user/user.component';

@NgModule({ //todos los componentes que cree para la aplicacion
  declarations: [
    AppComponent,
    Saludo,
    HolaMundoComponent,
    PruebaComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
