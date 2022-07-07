import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { pokemonModel } from '../http/httpModels';
import { buscadorModel } from './homeModels';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public totalPokemons: number;
  constructor(private _http: HttpService) {
    this.totalPokemons = 0;
  }

  public getPokemons(
    init: number,
    limit: number
  ): Promise<Array<pokemonModel>> {
    let pokemons: Array<pokemonModel> = [];
    return new Promise((resolve) => {
      this._http.getListPokemons(init, limit).then((data) => {
        this.totalPokemons = data.count;
        data.results.forEach((pokemon) => {
          this._http.getPokemon(pokemon.url).then((pokemonData) => {
            pokemons.push(pokemonData);
            resolve(pokemons);
          });
        });
      });
    });
  }

  public getNamePokemon(
    init: number,
    limit: number
  ): Promise<Array<buscadorModel>> {
    let pokemons: Array<buscadorModel> = [];
    return new Promise((resolve) => {
      this._http.getListPokemons(init, limit).then((data) => {
        data.results.forEach((pokemon) => {
          let id = Number(pokemon.url.split('/')[6]);
          pokemons.push({
            name: pokemon.name,
            id: id,
          });
        });
        resolve(pokemons);
      });
    });
  }

  public getIndividualPokemon(id: number): Promise<pokemonModel> {
    return new Promise((resolve) => {
      this._http
        .getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((data) => {
          resolve(data);
        });
    });
  }
}
