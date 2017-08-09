const users = require('../models').users
const bcrypt = require('bcrypt');


const register = (req, res) => {
    return users
        .create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            date: req.body.date,
            role: req.body.role,
        })
        .then(register => res.status(201).send(register))
        .catch(error => {
            if (error.name === 'SequelizeValidationError') {
                res.status(400).send({
                    message: "Please enter all fields",
                })
            }

        })

}

const login = (req, res) => {
    return users
        .findOne({
            where: {
                email: req.body.email,
                password: bcrypt.compareSync(req.body.password, users.password),
            }
        })
        .then((found) => {
            if (found === null) {
                res.status(404).send({
                    message: "User does not exsist!",
                })
            } else {
                res.status(200).send({
                    message: "Login Successful!",
                })
            }

        })
        .catch(error => res.status(400).send(error))
}
module.exports = {
    register,
    login,
}