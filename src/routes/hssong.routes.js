import { Router } from "express"

import { createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
 } from "../controllers/hssong.controller.js"   

export const songRoutes = Router()

songRoutes.post("/song", createSong);

songRoutes.get("/songs", getAllSongs);

songRoutes.get("/song/:id", getSongById);

songRoutes.put("/song/:id", updateSong );

songRoutes.delete("/song/:id", deleteSong);
