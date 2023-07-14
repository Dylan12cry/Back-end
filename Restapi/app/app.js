import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import ejs from 'ejs';
import path from 'path';
import session from 'express-session';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as url from 'url';
import usuario from './routes/usuario.routes.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


dotenv.config();

const app = express();

// Por si __dirname no funciona
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.set("views", path.join(__dirname, "views"));

// Asignacion de plantilla ejs
app.set("view engine", "ejs");

// MIDDLEWARES

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


// TODAS LAS RUTAS Y PERMISOS DE GOOGLE
// app.use("/auth", passport.authenticate("auth-google", {
//     scope: [
//         "https://www.googleapis.com/auth/userinfo.email",
//         "https://www.googleapis.com/auth/userinfo.profile"
//     ],
//     session: false
// }), loginRouter);

//app.use("/", route);


app.use("/", usuario);


// SE CAPTURA EL PUERTO QUE SE ENVUENTRA EN LOS AMBIENTES
app.set("port", process.env.PORT || 9999);



export default app;