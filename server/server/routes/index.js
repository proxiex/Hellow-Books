//const router = Router();
const routes = require('express').Router();
const path = require('path');
const userController = require('../controllers').users;
const bookController = require('../controllers').books;


routes.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the begining of nothingness',
}));


module.exports = (app) => {

    // Registeration API's
    app.get('/api/users/signup', (req, res) => res.status(200).send({
        message: 'Welcom to registreaion API',
    }));

    app.post('/api/users/signup', userController.register);

    // Books API's
    app.get('/api/books', bookController.getAll);

    app.get('/api/books/:bookId/', bookController.findOne);

    app.put('/api/books/:bookId/', bookController.update);

    app.post('/api/books', bookController.addBook);

    //
}