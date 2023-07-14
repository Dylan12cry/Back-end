import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import excel from "exceljs"
import PDFDocument from "pdfkit"
import axios from "axios";
import moment from 'moment-timezone';
import bodyParser from 'body-parser';
import fs from "fs"

const usuario = async (req, res) => {


    try {
        // process.env.API + 'pro' + `/${id}`;

        let ruta = 'localhost:3000/api/user';
        let option = {
            method: "GET",
        }
        let datos = {};
        const result = await fetch(ruta, option)
            .then(response => response.json())
            .then(data => {
                datos = data[0]
                //console.log(data[0]);
            })
            .catch(err => console.error("error en peticion" + err))



        res.render("index", {
            
            "datos": datos,
        });

    } catch (error) {
        res.redirect("/");
    }

};



export const usuarioController = {
    usuario
};