import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { PaginaNoEncontradaComponent } from './pages/shared/pagina-no-encontrada/pagina-no-encontrada.component';
import { appRouting } from './routes/app.routes';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeroesComponent,
    PaginaNoEncontradaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
