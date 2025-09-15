
import { model, Schema, Types } from "mongoose";

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },


  // relación 1:n una playlist tiene muchas canciones
  songs: [
    {
      type: Types.ObjectId,
      ref: "HarrySong" // nombre del modelo de canciones
    },
  ],
});

export const playlistModel = model("Playlist", playlistSchema);
