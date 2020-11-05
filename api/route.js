var express = require('express');
var userRoutes = express.Router();
var bcrypt = require('bcryptjs');
var request = require('request');
var Registration = require('./schema/User');
var RouteNames = require("./constants/constants");
//NOTE  USer route
userRoutes.route(RouteNames.register).post(function(req, res) {
    console.log(req.body)
    var register = new Registration(req.body);
    register.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(400).send("Failed to store to database");
        });
});

// Login Router
userRoutes.route(RouteNames.login).post(function(req, res) {
    Registration.findOne({ user_name: req.body.user_name })
        .then(user => {
            console.log("User from login", user)
            if (!user) res.sendStatus(204);
            else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
            }
        });
});
userRoutes.route(RouteNames.getWeatherInformation).post(function(req, res) {
    console.log(req)
    var URL = "https://api.openweathermap.org/data/2.5/weather?id="+ req.body.cityId +"&appid=82dc0e76a4031d70544e24a94c36dde7";
    request.get(URL,function(error,response,body) {
        if(response.statusCode){
            res.send({ success: true,data :JSON.parse(response.body)});
        }
    })

});


// Get allData
userRoutes.route(RouteNames.data).get(function(req, res) {
    Registration.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = userRoutes;