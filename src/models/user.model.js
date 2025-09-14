import {model, Schema } from "mongoose"

//aca definimos un esquema
const UserSchema = new Schema (
    {
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
     minlength: 6  // al menos 6 caracteres
  }
});

export const userModel = model ( "User", UserSchema)