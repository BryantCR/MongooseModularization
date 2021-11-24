const express = require("express");
const AnimalRouter = express.Router();
const {AnimalController} = require('./../controllers/animalController');

AnimalRouter
    .get( '/zoo', AnimalController.displayhome );
AnimalRouter
    .get( '/animals/new', AnimalController.formAddAnimal);

module.exports = {AnimalRouter}