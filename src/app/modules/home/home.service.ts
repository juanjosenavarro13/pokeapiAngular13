import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { pokemonModel } from '../http/httpModels';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _http: HttpService) {}

  public getPokemons(
    init: number,
    limit: number
  ): Promise<Array<pokemonModel>> {
    let pokemons: Array<pokemonModel> = [];
    return new Promise((resolve) => {
      this._http.getListPokemons(init, limit).then((data) => {
        data.results.forEach((pokemon) => {
          this._http.getPokemon(pokemon.url).then((pokemonData) => {
            pokemons.push(pokemonData);
            resolve(pokemons);
          });
        });
      });
    });
  }
}
