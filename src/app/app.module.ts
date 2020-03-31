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
import { EntrarComponent } from './login/entrar/entrar.component';
import { PasswordComponent } from './login/password/password.component';
import { DiasComponent } from './detalleva/dias/dias.component';
import { FechasComponent } from './detalleva/fechas/fechas.component';
import { PeriodoComponent } from './detalleva/periodo/periodo.component';
import { PrincipaldeComponent } from './detalleva/principalde/principalde.component';
import { CancelarComponent } from './detalleva/cancelar/cancelar.component';
import { PeriodofinComponent } from './detalleva/periodofin/periodofin.component';
import { SolicitarComponent } from './detalleva/solicitar/solicitar.component';
import { DatosreComponent } from './reporte/datosre/datosre.component';


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
    AltaemComponent,
    EntrarComponent,
    PasswordComponent,
    DiasComponent,
    FechasComponent,
    PeriodoComponent,
    PrincipaldeComponent,
    CancelarComponent,
    PeriodofinComponent,
    SolicitarComponent,
    DatosreComponent
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
