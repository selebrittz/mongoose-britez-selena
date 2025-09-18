import { model, Schema } from "mongoose";

// Definimos el esquema y las opciones aparte
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    // Relación 1:1 embebida
    profile: {
      first_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
      },
      last_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
      },
      biography: {
        type: String,
        maxlength: 500,
      },
    },
  },
  {
    toJSON: {
      virtuals: true, //los virtuals aparecen en la respuesta
      transform: (_doc, result) => {
        delete result.id;
      },
    },
  }
);

// Relación virtual: un usuario puede tener muchas playlists
userSchema.virtual("playlist", {
  ref: "Playlist", //modelo relacionado
  localField: "_id", //campo en user
  foreignField: "user",
});


export const userModel = model("User", userSchema);