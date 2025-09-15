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
  },

  //relacion  1:1 embebida
  profile:{
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
  }
});

export const userModel = model ( "User", UserSchema)

//aca tengo que hacer el virtual