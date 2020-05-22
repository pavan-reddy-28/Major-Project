var express = require('express');
var router = express.Router();
var ChatBox = require('../sequelize').ChatBox;
var Sequelize = require('../sequelize').Sequelize;
const { Op } =Sequelize;

// const models = require( '../../models/index');
router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        
        // ChatBox.query('SELECT TOP 5 FROM  ORDER BY Id DESC', { raw: true })
        
       ChatBox.findAll({
      
            attributes: [
                'messageData','from','createdAt'
             ],
            where: {
              schemeId:req.body.schemeId,
            },
            
            order: [
                ['createdAt', 'ASC'], 
          ],
          })
        .then(result => {
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


router.post('/insertData', function (req, res) {
    if (req.isAuthenticated()) {
        
        // ChatBox.query('SELECT TOP 8 FROM MyTable ORDER BY Id DESC', { raw: true })
        
        ChatBox.create({
            messageData:req.body.messageData,
            schemeId : req.body.schemeId,
            from : req.body.from
        })
        .then(result => {
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