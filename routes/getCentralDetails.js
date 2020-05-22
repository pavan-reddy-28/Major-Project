var express = require('express');
var router = express.Router();
var Notification = require('../sequelize').Notification;
var Government = require('../sequelize').Government;

// router.post('/', function (req, res) {
//     if (req.isAuthenticated()) {
//         Government.findAll({
//             attributes: ['id','name','type'],         
//         }).then(result => {
//             console.log(result)
//             res.send(result)
//         }).catch(error => {
//             console.log("db error ", error)
//             res.status(500).json(err)
//         });
//     }
//     else {
//         res.send({ "isAuthenticated": false })
//     }
// })


router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        Government.findAll({
            attributes: [
                'id','name','type'
             ],
            include: [{
                model: Notification,
                required: true,
                attributes: [
                   'value'
                 ],
               }],         
        }).then(result => {
            console.log(result)
            res.send(result)
        }).catch(error => {
            console.log("db error ", error)
            res.status(500).json(err)
        });
    }
    else {
        res.send({ "isAuthenticated": false })
    }
})



module.exports = router;