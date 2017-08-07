'use strict';
module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('borrows', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            bookid: {
                type: Sequelize.INTEGER
            },
            date_collected: {
                type: Sequelize.DATE
            },
            date_returned: {
                type: Sequelize.DATE
            },
            date_due: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        }),
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('borrows');
    }
};