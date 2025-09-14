import { Router } from "express";   
import {
     createUser,
     getAllUser, 
     getUserById} from "../controllers/user.controller.js";

export const userRoutes = Router();

//ruta para crear usuario
userRoutes.post("/user", createUser);

userRoutes.get("/users", getAllUser);

userRoutes.get("/users/:id", getUserById);