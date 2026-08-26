export class EmpleadoModel {
    constructor(_id = '', nombre = '', cargo = '', salario = 0, sucursal = ''){
        this._id = _id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.sucursal = sucursal;
    } 
    _id: String;
    nombre: String;
    cargo: String;
    salario: Number;
    sucursal: String;
}
