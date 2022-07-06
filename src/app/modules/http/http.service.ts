import { Injectable } from '@angular/core';
import { getListPokemonsModel, pokemonModel } from './httpModels';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  public getListPokemons(
    init: number = 0,
    end: number = 5
  ): Promise<getListPokemonsModel> {
    return new Promise((resolve) => {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${init}&limit=${end}`
      ).then((response) => resolve(response.json()));
    });
  }

  public getPokemon(url: string): Promise<pokemonModel> {
    return new Promise((resolve) => {
      fetch(url).then((response) => resolve(response.json()));
    });
  }
}
