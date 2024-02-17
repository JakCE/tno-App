import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http'

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` })
};*/

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURLNuevo = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //End-points Estudiante
  getEstudiantes() {
    let list = `${this.apiURLNuevo}/api/estudiantes`
    return this.http.get<any>(list)
  }
  postEstudiantes(request: any) {
    let assign = `${this.apiURLNuevo}/api/estudiantes`
    return this.http.post<any>(assign, request)
  }
  putEstudiantes(request: any) {
    let assign = `${this.apiURLNuevo}/api/estudiantes`
    return this.http.put<any>(assign, request)
  }
  deleteEstudiantes(id: any) {
    let assign = `${this.apiURLNuevo}/api/estudiantes/${id}`
    return this.http.delete<any>(assign)
  }
}
