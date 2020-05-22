module.exports = (sequelize, Sequelize) => {
    return sequelize.define('chatbox', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        messageData: {
            type: Sequelize.STRING,
            allowNull: false
        },
        schemeId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'schemes', // 'schemes' refers to table name
                key: 'id', // 'id' refers to column name in schemes table
            }
        },
        from: {
            type: Sequelize.STRING,
            allowNull: false
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