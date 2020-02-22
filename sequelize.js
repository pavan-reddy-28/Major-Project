var Sequelize = require('sequelize')
var globals = require('./public/globals')

var GovernmentModel = require('./models/government')
var SchemeModel = require('./models/scheme')
var NotificationModel = require('./models/notification')
var GovtSchemeMappingModel = require('./models/govtschememapping')
const sequelize = new Sequelize(globals.db_name, globals.db_user, globals.db_password, {
    host: globals.db_host,
    dialect: globals.dialect
    // define: {
    //     timestamps: false
    // }
});

const Government = GovernmentModel(sequelize, Sequelize)
const Scheme = SchemeModel(sequelize, Sequelize)
const Notification = NotificationModel(sequelize, Sequelize)
const GovtSchemeMapping = GovtSchemeMappingModel(sequelize, Sequelize)

Government.hasMany(Scheme);
Government.hasMany(Notification);
Government.hasMany(GovtSchemeMapping);
Scheme.hasMany(GovtSchemeMapping);

sequelize.sync()
    .then(() => {
        console.log('database disbursementOfFunds and tables have been created')
    });

module.exports = { Government, Scheme, Notification, GovtSchemeMapping }; 