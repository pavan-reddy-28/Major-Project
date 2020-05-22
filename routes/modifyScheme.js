var express = require('express');
var router = express.Router();
var Scheme = require('../sequelize').Scheme;

router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        console.log(req.body.description)
        console.log("funds :: "+req.body.schemeFund)
        console.log("id ::: "+req.body.schemeId)
        console.log("approved :: "+req.body.approved)
        if(req.body.govt==="central"){
        Scheme.update(
            { 
            
                approved:req.body.approved,
            },
            { returning: true, where:{ id: req.body.id}}
        ).then(result => {
            console.log(result)
            console.log('updated succesfully')
            res.send({success:true})
        }).catch(error => {
            console.log("database  error", error)
            res.status(500).json(err)
        });
    }else{
        Scheme.update(
            { 
                description:     req.body.description,
                fundsDisbursed : req.body.schemeFund,
            
            },
            { returning: true, where:{ id: req.body.id}}
        ).then(result => {
            console.log(result)
            console.log('updated succesfully')
            res.send({success:true})
        }).catch(error => {
            console.log("database  error", error)
            res.status(500).json(err)
        });
    }
    }
    else {
        res.send({ "isAuthenticated": false })
    }
})

module.exports = router;