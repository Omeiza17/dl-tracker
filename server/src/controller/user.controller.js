const express = require('express');
const bodyParser = require('body-parser');


const userService = require('../service/user.service').userRelated;
const users = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

users.post('/register', jsonParser, function (req, res, next) {
    const body = req.body;
    userService.createUser(body).then(() => res.status(201).send({message: 'User created'}));
    next();
});

users.post('/authenticate', jsonParser, (req, res, next) => {
    userService.authenticateUser(req.body, function (callbackResponse) {
        res.status(200).send({data: callbackResponse});
    });

});

exports.users = users;
