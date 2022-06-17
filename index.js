//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import timeCommutingRoutes from "./routes/formRoutes.js"

const app = express();
app.use(express.json())

dotenv.config();

connectDB();

const port = process.env.PORT || 4000;

app.use("/api/form", timeCommutingRoutes);

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
});
