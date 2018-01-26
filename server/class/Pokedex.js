class Pokedex {
    constructor() {
        this._pokemons = [];
    }

    addPokemon(pokemon) {
        if(!this._pokemons.find(pok => pok.id == pokemon.id)) {
            this._pokemons.push(pokemon);
        }
    }

    get pokemons() {
        return this._pokemons;
    }

    getPokemon(id) {
        return this._pokemons.find(pok => pok.id == id);
    }
}

module.exports = new Pokedex();