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
    }

}

module.exports = {AnimalController};