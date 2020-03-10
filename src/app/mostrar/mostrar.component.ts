import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlumnosService } from '../services/alumnos.service';	//<---
import { Alumno } from '../interfaces/alumno';					//<---


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

		alumnos: Alumno[];

		constructor(private alumnosService: AlumnosService) { 
				this.mostrarAlumnos();
			}

		mostrarAlumnos() {
				this.alumnosService.get().subscribe(
	  				(data:Alumno[])=>{
	  					this.alumnos = data;
	  					//console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: Mostrar!!!');
	  				});
			}

		borrar(id) {
				if(confirm('Realmente desea borrar el registro?')){
					this.alumnosService.borrar(id).subscribe(
		  				(data)=>{
		  					alert('Registro Borrado con Exito!!!');
		  						console.log(data);
		  					this.mostrarAlumnos();
		  				},
		  				(error)=>{
		  					console.log(error);
		  					alert('Error: Mostrar!!!');
		  				});
				}
			}

  		ngOnInit() {}

	}
