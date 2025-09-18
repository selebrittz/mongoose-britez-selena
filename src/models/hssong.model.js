//se llama de esta forma porqur hs es harry styles
import { model, Schema, Types } from "mongoose";

const harrySongSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        default: 'Harry Styles' // todas son de Harry Styles
    },
    album: {
        type: String,
        required: true,
        trim: true
    },


    //relacion de n:m
  playlists: [
    {
      type: Types.ObjectId,
      ref: "playlist" // nombre del modelo de canciones
    },
  ],
});



export const harryModel = model('HarrySong', harrySongSchema);

