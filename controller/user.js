const UserModel = require('../model/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
SECRET_KEY = "sshhh!!itssecretofvishal###lol";



const getUsersLists = async (req, res, next) => {
    try {
        UserModel.getAllUsers((error, users) => {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(users);
            }
        })
        return res.status(200).json({ message: "user list working" })
    } catch (error) {
        next(error);
    }
}

const signup = async (req, res, next) => {
    const body = req.body;
    const { email, password } = body;
    try {
        return res.status(200).json({ message: "working" })
    } catch (error) {
        next(error);
    }
}


const login = async (req, res, next) => {
    try {
        return res.status(200).json({ message: "working 2" })
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getUsersLists,
    signup,
    login
}