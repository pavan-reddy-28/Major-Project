module.exports = (sequelize, Sequelize) => {
    return sequelize.define('scheme', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        code: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        department: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        purpose: {
            type: Sequelize.STRING,
        },
        governmentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'governments', // 'governments' refers to table name
                key: 'id', // 'id' refers to column name in governments table
            }
        },
        estimation: {
            type: Sequelize.DOUBLE,
        },
        fundsDisbursed: {
            type: Sequelize.DOUBLE,
            defaultValue: 0.0
        },
        approved: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        updatedAt: {
            type: Sequelize.DATE(3),
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            onUpdate: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    })
};