import express from "express";
import campusController from '../controllers/campusController.js'

export const campusRoute = express.Router()

campusRoute.post("/create", campusController.createCampus);