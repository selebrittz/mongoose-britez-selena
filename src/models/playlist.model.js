
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

  user: {
  type: Schema.Types.ObjectId,
  ref: "User",
  },

  // relación 1:n na playlist tiene muchas canciones
  songs: [
    {
      type: Types.ObjectId,
      ref: "HarrySong" // nombre del modelo de canciones
    },
  ],
});

export const playlistModel = model("Playlist", playlistSchema);
