'use strict';
module.exports = (sequelize, DataTypes) => {
    const borrow = sequelize.define('borrow', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_collected: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        date_returned: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        date_due: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                // Todo.hasMany(models.TodoItem, {
                //
                //});
            },
        },
    });
    return borrow;
};