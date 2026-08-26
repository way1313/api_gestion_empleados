import { Injectable } from '@angular/core';
import { EmpleadoModel } from './../models/empleado.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  selectedEmpleadoModel : EmpleadoModel;

  empleados: EmpleadoModel[];

  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient){
    this.selectedEmpleadoModel = new EmpleadoModel();
    this.empleados = [];
  }

  //Metodos CRUD
  getEmpleados(){
    return this.http.get(`${this.URL_API}/list`);
  }

  postEmpleado(empleado: EmpleadoModel) {
    return this.http.post(`${this.URL_API}/create`, empleado);
  }

  putEmpleado(EmpleadoModel: EmpleadoModel) {
    return this.http.put(this.URL_API + `/${EmpleadoModel._id}`, EmpleadoModel);
  }

  deleteEmpleado(_id: string){
    return this.http.delete(this.URL_API + `/${EmpleadoModel}`);
  }

}
