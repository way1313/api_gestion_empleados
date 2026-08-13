import express from 'express'
import empleadoCtrl from '../controller/empreado.controller.js'

const router = express.Router();

router.post("/create", empleadoCtrl.crearEmpleado); // Guardar empleado creado
router.get("/list", empleadoCtrl.obtenerEmpleados);
router.get("/list/:id", empleadoCtrl.obtenerEmpleadoId);
router.put("/editar/:id", empleadoCtrl.editarEmpleado);
router.delete("/eliminar/:id", empleadoCtrl.eliminarEmpleado);


export default router;