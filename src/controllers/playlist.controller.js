// controllers/playlist.controller.js
import { playlistModel } from "../models/playlist.model.js";

// crear playlist
export const createPlaylist = async (req, res) => {
  try {
    const playlist = await playlistModel.create(req.body);
    res.status(201).json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getPlaylists = async (req, res) => {
  try {
    const playlists = await playlistModel.find().populate("songs"); //nombre de ref
    res.json(playlists);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPlaylistById = async (req, res) => {
  try {
    const playlist = await playlistModel
      .findById(req.params.id)
      .populate("songs");
    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada" });
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const addSongToPlaylist = async (req, res) => {
  try {
    const { playlistId, songId } = req.body;
    const playlist = await playlistModel.findByIdAndUpdate(
      playlistId,
      { $push: { songs: songId } },
      { new: true }
    ).populate("songs"); //nombre de ref

    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada" });
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const deletePlaylist = async (req, res) => {
  try {
    const playlist = await playlistModel.findByIdAndDelete(req.params.id);
    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada" });
    res.json({ message: "Playlist eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
