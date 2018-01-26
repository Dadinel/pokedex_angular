import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public _pokemons: Object;
  private _pokedexService: PokedexService;

  constructor(pokedexService: PokedexService) {
    this._pokedexService = pokedexService;
  }

  ngOnInit() {
    this._pokedexService.getPokemons()
      .subscribe( (res) => {
        this._pokemons = res;
        //this._pokemons.push(res);
        //this._pokemons = res;
      }, (error) => {
        console.log(error);
      })
  }

}