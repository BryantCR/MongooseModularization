const express = require("express");
const AnimalRouter = express.Router();
const {AnimalController} = require('./../controllers/animalController');

AnimalRouter
.get( '/', AnimalController);

module.exports = {AnimalRouter}