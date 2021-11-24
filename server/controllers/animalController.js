const {AnimalModel} = require('./../models/AnimalsModel');

const AnimalController = {
    displayhome : function( request, response ){
        AnimalModel
            .getAllAnimals()
            .then( data => {
                console.log( data );
                response.render( 'displayAnimals', { animals : data } );
            });
    },
    formAddAnimal : function( request, response ){
        response.render( 'addAnimal' );
    },
    addAnimal : function( request, response ){
        console.log( request.body );
        const animalId = Number(request.body.animalId);
        const animalName = request.body.animalName;
        const animalInformation = request.body.animalInformation;
    
        // Run validations to see if the 'id' is not already in the list
        const newAnimal = {
            animalId,
            animalName,
            animalInformation
        };
        console.log("Data from the form: " + newAnimal );
        AnimalModel
            .insertAnimal( newAnimal )
            .then( result => {
                console.log("Result Catch: " + result );
                response.redirect( '/animal/zoo' );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
                response.redirect( '/animal/animals' );
            })
    },
    getAnimalInfo : function( request, response ){
        var id = request.params.animalId;
        AnimalModel
            .getAnimalById(id)
            .then( data => {
                console.log( data );
                response.render( 'animalinfo', { animal : data } );
            });  
    },
    goEditAnimalInfo : function( request, response ){
        var id = request.params.animalId;
        AnimalModel
            .getAnimalById(id)
            .then( data => {
                console.log( data );
                response.render( 'editAnimals', { animal : data } );
            });  
    },
    updateAnimalInfo : function( request, response ){
        console.log( request.body );
        var id = request.params.animalId;
        const animalName = request.body.animalName;
        const animalInformation = request.body.animalInformation;
    
        // Run validations to see if the 'id' is not already in the list
        const newAnimal = {
            animalName,
            animalInformation
        };
        console.log("Data from the edit form: " + newAnimal );
        AnimalModel
            .updateAnimalInfo( id, newAnimal )
            .then( result => {
                console.log("Result Catch: " + result );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
            })
        response.redirect( '/animal/zoo' );
    },
    deleteAnimal : function( request, response ){
        var id = request.params.animalId;
        AnimalModel
            .delete( id )
            .then( result => {
                console.log("Result Catch: " + result );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
            })
            response.redirect( '/' );
    }

}

module.exports = {AnimalController};