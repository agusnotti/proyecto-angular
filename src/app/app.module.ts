//modulo principal de angular, que permite iniciar la aplicacion. es leido por el main.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { Saludo } from './primerComponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { DatosComponent } from './datos/datos.component';
import { AboutComponent } from './about/about.component';

import { DataService} from './data.service'

const routes: Route[] = [
  {path: '', component: Saludo},
  {path: 'about', component: AboutComponent}
];

@NgModule({ //todos los componentes que cree para la aplicacion
  declarations: [
    AppComponent,
    Saludo,
    HolaMundoComponent,
    UserComponent,
    DatosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
