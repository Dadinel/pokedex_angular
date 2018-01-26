let http = require('http');
let url = require('url');
let pokedex = require('./class/Pokedex');
let getPokemons = require('./rest/getPokemons');

getPokemons(pokedex);

http.createServer(function(req, res) {
    let retUrl = url.parse(req.url);

    if(retUrl.pathname == '/pokedex') {
        if(req.headers.origin) {
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        }
        
        if(!retUrl.query)
            res.end(JSON.stringify(pokedex.pokemons));
        else if(retUrl.query.includes('id=')) {
            try {
                let id = retUrl.query.split('=')[1];
                res.end(JSON.stringify(pokedex.getPokemon(id)));
            }
            catch(error) {
                console.log(error);
                error(res);
            }
        }
        else {
            error(res);
        }
    }
    else {
        error(res);
    }

    function error(res) {
        res.statusCode = 404;
        res.end('Invalid request... =(');
    }
}).listen(3000);