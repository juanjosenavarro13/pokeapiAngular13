import { Component, OnInit } from '@angular/core';
import { pokemonModel } from '../http/httpModels';
import { HomeService } from './home.service';
import { buscadorModel } from './homeModels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pokemons: Array<pokemonModel>;
  public loading: boolean;
  public initPag: number;
  public tamPag: number;
  private initBuscador: boolean;
  public namePokemons: Array<buscadorModel>;
  constructor(private _service: HomeService) {
    this.loading = false;
    this.pokemons = [];
    this.initPag = 0;
    this.tamPag = 5;
    this.initBuscador = true;
    this.namePokemons = [];
  }

  ngOnInit(): void {
    this.getPokemons(this.initPag, this.tamPag);
  }

  private getPokemons(init: number, limit: number = this.tamPag): void {
    this._service.getPokemons(init, limit).then((data) => {
      this.pokemons = data;
      this.loading = true;
      if (this.initBuscador) {
        this.buscadorPokemon();
        this.initBuscador = false;
      }
    });
  }

  public pagSiguiente() {
    this.loading = false;
    this.initPag += this.tamPag;
    this.getPokemons(this.initPag);
  }

  public pagAnterior() {
    this.loading = false;
    if (this.initPag - this.tamPag >= 0) {
      this.initPag -= this.tamPag;
      this.getPokemons(this.initPag);
    }
  }

  public selectPage() {
    let limit = Number($('#selectPage option:selected').val());
    this.tamPag = limit;
    this.getPokemons(this.initPag, limit);
  }

  public buscadorPokemon() {
    this._service
      .getNamePokemon(0, this._service.totalPokemons)
      .then((data) => {
        this.namePokemons = data;
      });
  }
}
