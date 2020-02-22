var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var Government = require('../sequelize').Government;
var Notification = require('../sequelize').Notification;

router.post('/', function (req, res) {
    console.log(req.body)
    const data = {
        name: req.body.name,
        type: req.body.type,
        password: req.body.password
    };
    var hash = crypto.createHash('md5').update(data.password).digest('hex');
    Government.findOne({
        where: {
            name: data.name,
            type: data.type
        }
    }).then(govt => {
        if (govt) {
            console.log("Already exists");
            res.send({ message: "Already exists", exists: true })
        }
        else {
            Government.create({
                name: data.name,
                password: hash,
                type: data.type,
            }).then(result => {
                console.log("Registered successfully")
                addToNotification(result.id, result.type, res)
                //res.send({ message: "Registered successfully", success: true })
            }).catch(err => {
                console.log("Error in database", err)
                res.status(500).json(err)
            })
        }
    }).catch(err => {
        console.log("Error in database", err)
        res.status(500).json(err)
    })
})

function addToNotification(id, type, res) {
    Notification.create({
        governmentId: id,
        type: type
    }).then(result => {
        console.log("Added to notification table")
        res.send({ message: "Registered successfully", success: true })
    }).catch(err => {
        console.log("Error in database", err)
        res.status(500).json(err)
    })
}

module.exports = router;