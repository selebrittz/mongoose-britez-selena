import { userModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    const {username, email, password} = req.body; //desestructure los datos del body para usarlos dentro de la función.

    try {
        const newUser = await userModel.create({
            username,
            email,
            password
        })
        res.status(201).json ({
            ok:true,
            msg: "usuario creado correctamente",
            data: newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json ({
            ok:false,
            msg: "error interno del servidor"
        });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(201).json ({
            ok:true,
            data: users
        })
    } catch (error) {
        console.log(error)
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
        res.status(201).json ({
            ok:true,
            data: user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json ({
            ok:false,
            msg: "error interno del servidor"
        });
    }
};
