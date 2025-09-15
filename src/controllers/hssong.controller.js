import { harryModel } from "../models/hssong.model.js";

export const createSong = async (req, res) => {
  try {
    const { title, album } = req.body;

    const newSong = await harryModel.create({
      title,
      album,
    });

    res.status(201).json({
      ok: true,
      msg: "Canción creada correctamente",
      data: newSong,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const songs = await harryModel.find();

    res.status(200).json({
      ok: true,
      data: songs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await harryModel.findById(id);

    if (!song) {
      return res.status(404).json({
        ok: false,
        msg: "Canción no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      data: song,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};


export const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, album } = req.body; //los datos que voy a actualizar

    const updatedSong = await harryModel.findByIdAndUpdate(
      id,
      { title, album },
      { new: true }
    );

    if (!updatedSong) {
      return res.status(404).json({
        ok: false,
        msg: "Canción no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Canción actualizada correctamente",
      data: updatedSong,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};


export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await harryModel.findByIdAndDelete(id);

    if (!deletedSong) {
      return res.status(404).json({
        ok: false,
        msg: "Canción no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Canción eliminada correctamente",
      data: deletedSong,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
