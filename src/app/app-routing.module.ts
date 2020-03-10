import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AltaComponent } from './alta/alta.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
		{path: '', component: InicioComponent},
		{path: 'inicio', component: InicioComponent},
		{path: 'alumnos', component: MostrarComponent},
		{path: 'alta', component: AltaComponent},
		{path: 'editar', component: EditarComponent},
		{path: 'editar/:id', component: EditarComponent}  // << permite enviar parametros
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
