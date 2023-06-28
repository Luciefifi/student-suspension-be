import express from "express";
import campusController from "../controllers/campusController";

export const campusRoute = express.Router()

campusRoute.post("/create", campusController.createCampus);