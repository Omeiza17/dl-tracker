const express = require('express');
const bodyParser = require('body-parser');
// const parser = bodyParser.json();
const users = express.Router();
const userService = require('../service/user.service').userRelated;

users.post('/register',  function (req, res, next) {
    const body = req.body;
    console.log(`Request: ${body}`);
    userService.createUser(res.body).then(() => res.status(201).send({message: 'User created'}));
    next();
});

exports.users = users;
