import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import swaggerUiExpress from 'swagger-ui-express';
import { specs } from './swagger.js';



const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Conectado a la Base de Datos"); 
        app.listen(PORT, () => console.log(`Listening on ${PORT}`)); 
    })
    .catch(e => {
        console.error("Error al conectar a la BD:", e);
    });

app.use(express.json());
app.use(cookieParser());

app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

export default app;