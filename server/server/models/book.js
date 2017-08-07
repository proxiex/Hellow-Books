'use strict';
module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define('book', {
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bookname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        classMethods: {
            associate: (models) => {
                //Todo.hasMany(models.TodoItem, {
                //
                // });
            },
        },
    });
    return book;
};