import express from 'express'
import mongoose from 'mongoose'
import dbConn from './database/database.js'
import dotenv from 'dotenv'
import cors from 'cors'
import  campusRoute from './src/routes/campusRoute.js'

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();

const PORT= process.env.PORT || 3000;
dbConn();

app.listen(PORT , ()=> {
console.log(`The App is listening on the port ${PORT}`)
})


app.use("/api", campusRoute);