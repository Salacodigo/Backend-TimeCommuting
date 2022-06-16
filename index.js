//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


const app = express();
dotenv.config();

connectDB();

const port = process.env.PORT || 4000;

app.use("/", (req, res) => {
    res.send("Hola Mundo");
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
});
