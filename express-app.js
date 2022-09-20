const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { event } = require('./src/api');

module.exports = async (app) => {
    try {
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors());
        app.use(express.json());

        //apis
        event(app);
    } catch (error) {
        console.log('error in express app', error);
    }
};
