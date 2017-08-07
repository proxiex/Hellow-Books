'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        membership: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Silver',
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'User',
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
    return users;
};