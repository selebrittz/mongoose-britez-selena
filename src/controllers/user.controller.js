import { userModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    const {username, email, password,profile} = req.body;
    try {
        const newUser = await userModel.create({
            username,
            email,
            password,
            profile
        });
        res.status(201).json ({
            ok:true,
            msg: "usuario y perfil creado correctamente",
            data: newUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json ({
            ok:false,
            msg: "error interno del servidor"
        });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json ({
            ok:true,
            data: users
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json ({
            ok:false,
            msg: "error interno del servidor"
        });
    }
};


export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id)
        res.status(200).json ({
            ok:true,
            data: user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json ({
            ok:false,
            msg: "error interno del servidor"
        });
    }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, { username }, { new: true });
    res.status(200).json({
      ok: true,
      msg: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado"
      });
    }
    res.status(200).json({
      ok: true,
      msg: "Usuario eliminado con éxito",
      data: user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

