const express = require('express');
const bodyParser = require('body-parser');

const courseWorkService = require('../service/coursework.service').courseWorkRelated;

const courseWorks = express.Router();
bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

courseWorks.get('/', jsonParser, function (req, res) {
    res.status(200).send({data: 'Got here alright!'})
})

courseWorks.post('/:id', jsonParser, function (req, res) {
    const body = req.body;
    body.user_id = req.params.id;
    courseWorkService.createCoursework(body)
        .then(() => res.sendStatus(201).send({message: 'Coursework created'}),);
},);

exports.coureWorks = courseWorks;
