function getPokemon(id, pokedex) {
    let https = require('https');

    https.get('https://pokegocomplete.com/pokemonapi?id=' +id.toString() , res => {
        if(res.statusCode == 200) {
            let rawData = '';
            res.setEncoding('utf8');

            res.on('data', chunk => {
                rawData += chunk;
            });

            res.on('end', () => {
                let pokemon = JSON.parse(rawData);
                //console.log(pokemon);

                if(pokemon.id != null) {
                    id++;
                    pokedex.addPokemon(pokemon);
                    getPokemon(id ,pokedex);
                }
                else {
                    //Tenta novamente de uma em uma hora
                    setTimeout(getPokemon, 3600000, id, pokedex);
                }
            })
        }
    });
}

function getPokemons(pokedex) {
    getPokemon(1, pokedex);
}

module.exports = getPokemons;