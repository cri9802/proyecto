import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlumnosService } from '../services/alumnos.service';	//<---
import { Alumno } from '../interfaces/alumno';					//<---

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
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
		
	  	constructor(private alumnosService: AlumnosService) { }

	  	ngOnInit() { }

	  	salvarAlumno() { 
	  			//console.log(this.alumno);
	  			this.alumnosService.save(this.alumno).subscribe(
	  				(data)=>{
	  					alert('Alumno: Alta correcta.');
	  					console.log(data);
	  				},
	  				(error)=>{
	  					console.log(error);
	  					alert('Error: Alta!!!');
	  				});
	  		}

	}








