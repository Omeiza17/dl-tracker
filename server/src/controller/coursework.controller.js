const express = require('express');
const bodyParser = require('body-parser');

const courseWorks = express.Router();
const jsonParser = bodyParser.json();

courseWorks.get('/', jsonParser, function (req, res, next) {
    res.status(200).send({data: 'Got here alright!'})
})

exports.coureWorks = courseWorks;
