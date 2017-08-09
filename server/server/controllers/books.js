const books = require('../models').book

module.exports = {
    addBook(req, res) {
        return books
            .create({
                ISBN: req.body.ISBN,
                bookname: req.body.bookname,
                author: req.body.author,
                publisher: req.body.publisher,
                category: req.body.category,
                quantity: req.body.quantity,
                details: req.body.details,
            })
            .then(books => res.status(201).send(books))
            .catch(error => res.status(400).send(error));
    },

    getAll(req, res) {
        return books
            .all()
            .then(books => res.status(200).send(books))
            .catch(error => res.status(400).send(error));
    },

    findOne(req, res) {
        return books
            .findById(req.params.bookId)
            .then(books => {
                if (!books) {
                    return res.status(404).send({
                        message: 'Book Not Found!',
                    })
                }
                return res.status(200).send(books);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return books
            .findById(req.params.bookId)
            .then(books => {
                if (!books) {
                    return res.status(404).send({
                        message: 'Book not found',
                    })
                }
                return books
                    .update({
                        book_id: req.body.book_id,
                        bookname: req.body.bookname,
                        author: req.body.author,
                        publisher: req.body.publisher,
                        category: req.body.category,
                        quantity: req.body.quantity,
                        details: req.body.details,
                    })
                    .then(() => res.status(200).send(books))
                    .catch((error) => res.status(400).send(error))
            })

        .catch((error) => res.status(400).send(error))
    }
}