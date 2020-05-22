module.exports = (sequelize, Sequelize) => {
    return sequelize.define('notification', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.STRING,
        },
        governmentId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'governments', // 'governments' refers to table name
                key: 'id', // 'id' refers to column name in governments table
            }
        },
        name:{
              type:Sequelize.STRING
        },
        value: {
            type: Sequelize.INTEGER,
            defaultValue: 0
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