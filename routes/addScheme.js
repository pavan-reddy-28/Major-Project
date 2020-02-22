var express = require('express');
var router = express.Router();
var globals = require('../public/globals')
var Scheme = require('../sequelize').Scheme;
var Notification = require('../sequelize').Notification;
var GovtSchemeMapping = require('../sequelize').GovtSchemeMapping;

router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        const data = {
            name: req.body.name,
            code: req.body.code,
            department: req.body.department,
            description: req.body.description,
            purpose: req.body.purpose,
            governmentId: req.user.id,
            estimation: req.body.estimation,
        };
        console.log(data)
        Scheme.create(data).then(result => {
            addToGovtSchemeMapping(data.governmentId, result.id, res)
        }).catch(err => {
            console.log("Error in database", err)
            res.status(500).json(err)
        })
    }
    else {
        res.send({ "isAuthenticated": false })
    }
})

function addToGovtSchemeMapping(governmentId, schemeId, res) {
    const data = {
        governmentId: governmentId,
        schemeId: schemeId
    }
    GovtSchemeMapping.create(data).then(() => {
        updateNotification(governmentId, res);
    }).catch(err => {
        console.log("Error in database", err)
        res.status(500).json(err)
    })
};

function updateNotification(governmentId, res) {
    Notification.increment('value', { where: { governmentId: governmentId } })
        .then(result => {
            console.log(result)
            res.send({ message: "Scheme added successfully" })
        }).catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
}

module.exports = router;