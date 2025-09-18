import { Router } from "express"

import { createPlaylist,
    deletePlaylist,
    getPlaylistById,
    addSongToPlaylist,
    getPlaylists
} from "../controllers/playlist.controller.js"

export const playlistRoutes = Router()

playlistRoutes.post("/playlist", createPlaylist);

playlistRoutes.get("/playlists",getPlaylists); 

playlistRoutes.get("/playlist/:id", getPlaylistById);

playlistRoutes.put("/playlist/add", addSongToPlaylist);

playlistRoutes.delete("/playlist/:id", deletePlaylist);
