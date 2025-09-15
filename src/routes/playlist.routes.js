import { Router } from "express"

import { createPlaylist,
    deletePlaylist,
    getPlaylistById,
    getPlaylists
} from "../controllers/playlist.controller.js"

export const playlistRoutes = Router()

playlistRoutes.post("/playlist", createPlaylist);

playlistRoutes.get("/playlists",getPlaylists); 

playlistRoutes.get("/playlist/:id", getPlaylistById);

playlistRoutes.put("/playlist/:id", getPlaylistById);

playlistRoutes.delete("/playlist/:id", deletePlaylist);
