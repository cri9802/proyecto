import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AltaComponent } from './alta/alta.component';
import { EditarComponent } from './editar/editar.component';

import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { BusquedaComponent } from './login/busqueda/busqueda.component';
import { AltaemComponent } from './pages/altaem/altaem.component';
import { PrincipaldeComponent } from './detalleva/principalde/principalde.component';
import { DatosreComponent } from './reporte/datosre/datosre.component';

const routes: Routes = [
		{path: '', component: PortafolioComponent}, 
		{path: 'inicio', component: InicioComponent},
		{path: 'alumnos', component: MostrarComponent},
		{path: 'alta', component: AltaComponent},
		{path: 'editar', component: EditarComponent},
		{path: 'editar/:id', component: EditarComponent},// << permite enviar parametros
		{path: 'about', component: AboutComponent},
		{path: 'busqueda', component: BusquedaComponent},
		{path: 'item', component: ItemComponent},
		{path: 'portafolio', component: PortafolioComponent},
		{path: 'altaem', component: AltaemComponent},
		{path: 'principalde', component: PrincipaldeComponent},
		{path: 'datosre', component: DatosreComponent},
		{path: '**', pathMatch: "full", redirectTo: ""}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
