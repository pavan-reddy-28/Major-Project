var express = require('express');
var router = express.Router();
var globals = require('../public/globals')
var Scheme = require('../sequelize').Scheme;
var Notification = require('../sequelize').Notification;
var GovtSchemeMapping = require('../sequelize').GovtSchemeMapping;

router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        const data = {
            name: req.body.title,
            description: req.body.description,
            fundsDisbursed :req.body.schemeFund,
            governmentId: req.body.govtId,
            approved : 0,
            
        };
        console.log('line 18 data ==== ')
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
            res.send({success:true})
        }).catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
}

module.exports = router;