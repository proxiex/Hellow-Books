const users = require('../models').users

module.exports = {
    register(req, res) {
        return users
            .create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                date: req.body.date,
                role: req.body.role,
            })
            .then(register => res.status(201).send(register))
            .catch(error => res.status(400).send(error));
    },
    login(req, res) {
        return login
            .findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            //.then((found)=>)
    }
}