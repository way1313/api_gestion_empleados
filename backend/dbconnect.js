import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/empleados";
mongoose
.connect(URI)
.then((db) => console.log('Base de datos conectada'))
.catch((err) => console.error(err));

export default mongoose;