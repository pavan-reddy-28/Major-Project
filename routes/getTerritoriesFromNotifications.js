var express = require('express');
var router = express.Router();
var Notification = require('../sequelize').Notification;

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        Notification.findAll({
            where: {
                type: "territory"
            }
        }).then(result => {
            console.log(result)
            res.send(result)
        }).catch(error => {
            console.log("db error", error)
            res.status(500).json(err)
        });
    }
    else {
        res.send({ "isAuthenticated": false })
    }
})

module.exports = router;