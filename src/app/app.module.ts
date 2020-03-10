import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';            //<---
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //<---

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AltaComponent } from './alta/alta.component';
import { EditarComponent } from './editar/editar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MostrarComponent,
    AltaComponent,
    EditarComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     //<---
    ReactiveFormsModule,  //<---
    FormsModule           //<---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
