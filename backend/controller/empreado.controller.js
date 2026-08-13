import Empleado from '../models/empleado.model.js'

const empleadoCtrl = {};

// Definir cada uno de los metodos CRUD

// Crear - Crear un empleado

empleadoCtrl.crearEmpleado = async (req, res) => {
   const empleado = new Empleado(req.body);
   await empleado.save();
   res.json({
    mensaje: `Empleado Guardado: ${empleado.nombre}`
   });
};

//Read - listar todos los empleados
empleadoCtrl.obtenerEmpleados = async(req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

//Read - listar empleado por ID
empleadoCtrl.obtenerEmpleadoId = async (req, res) => {
    const empleadoid = await Empleado.findById(req.params.id);
    res.json(empleadoid);
};

// update - actualizar/ editar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params
    const empleadoEditar = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        sucursal: req.body.sucursal,
        salario: req.body.salario
    };
    await Empleado.findByIdAndUpdate(
        id, {$set: empleadoEditar}, {new:true});
        res.json({
             mensaje: `Empleado Actualizado: ${ id }`,
   });

};

//Delete - Eliminar por ID
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
      res.json({
             mensaje: `Empleado Eliminado`,
   });
}


export default empleadoCtrl;