import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 	//<---

import { Alumno } from '../interfaces/alumno';						//<---

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

		API_ENDPOINT = 'http://localhost:8080/utvt/public/api';

		constructor(private httpClient: HttpClient) { }

		get(){
				return this.httpClient.get(this.API_ENDPOINT + '/alumnos');
			}

		save(alumno: Alumno) {
				/*  --- En caso de error 
					const headers = new HttpHeaders(headers:{'Content-Type': 'application/json'});
					return this.httpClient.post(url:this.API_ENDPOINT + '/alumnos', alumno, options:{headers: headers});
				*/
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.post(this.API_ENDPOINT + '/alumnos', alumno, {headers: headers});
			}

		put(alumno) {
				const headers = new HttpHeaders({'Content-Type': 'application/json'});
				return this.httpClient.put(this.API_ENDPOINT + '/alumnos/' + alumno.id, alumno, {headers: headers});
			}

		borrar(id) {
				return this.httpClient.delete(this.API_ENDPOINT + '/alumnos/' + id);
			}

	}
