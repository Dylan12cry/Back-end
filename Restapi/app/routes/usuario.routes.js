import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import excel from "exceljs"
import PDFDocument from "pdfkit"
import axios from "axios";
import fs from "fs"
import { usuarioController } from "../controllers/usuario.controller.js";



dotenv.config();

const router = Router();

router.get('/',  usuarioController.usuario);


export default router;