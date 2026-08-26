import express from 'express'
import cors from 'cors'
import empleadoRoute from '../backend/routes/empleado.route.js'
import './dbconnect.js'

const app = express();

app.set('port', 3000)

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor activo en el puerto', app.get('port'));
});

//middleware

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/api/empleados', empleadoRoute);