import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';            //<---
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //<---
//rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { InicioComponent } from './inicio/inicio.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AltaComponent } from './alta/alta.component';
import { EditarComponent } from './editar/editar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { EmailComponent } from './login/email/email.component';
import { BusquedaComponent } from './login/busqueda/busqueda.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { AltaemComponent } from './pages/altaem/altaem.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MostrarComponent,
    AltaComponent,
    EditarComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    EmailComponent,
    BusquedaComponent,
    AboutComponent,
    ItemComponent,
    AltaemComponent
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
