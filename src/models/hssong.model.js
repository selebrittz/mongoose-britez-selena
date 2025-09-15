//se llama de esta forma porqur hs es harry styles
import { model, Schema } from "mongoose";

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
    }
});

export const harryModel = model('HarrySong', harrySongSchema);

