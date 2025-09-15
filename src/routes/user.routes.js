import { Router } from "express";   
import {
     createUser,
     deleteUser,
     getAllUser, 
     getUserById,
     updateUser} from "../controllers/user.controller.js";

export const userRoutes = Router();

//ruta para crear usuario
userRoutes.post("/user", createUser);

//ruta para traer a todos los usuarios
userRoutes.get("/users", getAllUser);

//ruta para traer a los user por id
userRoutes.get("/users/:id", getUserById);

//ruta para actualizar user
userRoutes.put("/users/:id", updateUser)

//ruta para eliminar a un user pero por su id
userRoutes.delete("/users/:id", deleteUser)