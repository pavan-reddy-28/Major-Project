var express = require('express');
var router = express.Router();
var Scheme = require('../sequelize').Scheme;

router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        Scheme.findAll({
            where: {
                governmentId: req.body.id
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