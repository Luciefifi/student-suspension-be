import express from 'express'
import mongoose from 'mongoose'
import dbConn from './database/database.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();

const PORT= process.env.PORT || 5000;
dbConn();

app.listen(PORT , ()=> {
console.log(`The App is listening on the port ${PORT}`)
})