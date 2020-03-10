import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';				//<--

import { AlumnosService } from '../services/alumnos.service';	//<---
import { Alumno } from '../interfaces/alumno';					//<---

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

		alumno: Alumno = {
				matricula: null,
				nombre: null,
				app: null,
				apm: null,
				fn: null,
				correo: null,
				pass: null,
				genero: null,  //string
				grupo: null  //string
			};

		//alumnos = Alumno[];

		id: any;
		editar: boolean = false;

  		constructor(private alumnosService: AlumnosService, 
  			private activatedRoute: ActivatedRoute ) { 
  				this.id = this.activatedRoute.snapshot.params['id'];
  				//console.log(this.id);

  				if(this.id){
  						this.editar = true;
  						this.alumnosService.get().subscribe(
				  				(data:Alumno[])=>{
				  					//this.alumnos = data;
				  					//console.log(data);
				  					this.alumno = data.find((search => { 
				  						return search.id == this.id }));
				  						console.log(this.alumno);
				  				},
				  				(error)=>{
				  					console.log(error);
				  					alert('Error: id!!!');
			  				});
  					}
  				else{
  						this.editar = false;
  					}

  			}

  		editarAlumno() { 
	  			//console.log(this.alumno);
	  			this.alumnosService.put(this.alumno).subscribe(
	  				(data)=>{
	  					alert('Alumno: datos editado.');
	  					console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: editar!!!');
	  				});
	  		}

		ngOnInit() { }

	}







