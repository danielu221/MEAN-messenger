var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');

router.get('/', function (req, res, next) {
        res.render('index');
});

router.post('/', function (req, res, next) {
       var user=new User({
         firstName:req.body.firstName,
         lastName:req.body.firstName,
         password:bcrypt.hashSync(req.body.password,10),
         email:req.body.email,
       })
       user.save(function(err,result){
         if (err) {
             console.log("ERRROR")
             return res.status(500).json({
                 title: 'An error occurred',
                 error: err
             });
         }
         res.status(201).json({
             message: 'User created',
             obj: result
         });
       });
});

module.exports = router;
