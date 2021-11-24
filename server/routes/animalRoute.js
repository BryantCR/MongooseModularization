const express = require("express");
const AnimalRouter = express.Router();
const {AnimalController} = require('./../controllers/animalController');

AnimalRouter
    .get( '/zoo', AnimalController.displayhome );
AnimalRouter
    .get( '/animals/new', AnimalController.formAddAnimal );
AnimalRouter
    .post( '/animals', AnimalController.addAnimal );
AnimalRouter
    .get( '/animals/:animalId', AnimalController.getAnimalInfo )
AnimalRouter
    .get( '/animals/edit/:animalId', AnimalController.goEditAnimalInfo );
AnimalRouter
    .post( '/animals/:animalId', AnimalController.updateAnimalInfo );
AnimalRouter
    .post( '/destroy/:animalId', AnimalController.deleteAnimal );

module.exports = {AnimalRouter}