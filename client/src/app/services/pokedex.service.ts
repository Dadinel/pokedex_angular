import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokedexService {
    private _httpClient: HttpClient;
    private readonly _url: string = 'http://localhost:3000/pokedex';

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public getPokemons() {
        //return this._httpClient.get(this._url, { headers: new HttpHeader().set('Origin' , '*') });
        return this._httpClient
            .get(this._url)
            .map(res => res);
    }

    public getPokemon(id: string) {
        return this._httpClient
            .get(this._url + '?id=' + id)
            .map(res => res);
    }
}