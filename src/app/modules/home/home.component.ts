import { Component, OnInit } from '@angular/core';
import { pokemonModel } from '../http/httpModels';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pokemons: Array<pokemonModel>;
  public loading: boolean;
  public initPag: number;
  public limit: number;
  public tamPag: number;
  constructor(private _service: HomeService) {
    this.loading = false;
    this.pokemons = [];
    this.initPag = 0;
    this.limit = 5;
    this.tamPag = 5;
  }

  ngOnInit(): void {
    this.getPokemons(this.initPag, this.limit);
  }

  private getPokemons(init: number, limit: number = this.limit): void {
    this._service.getPokemons(init, limit).then((data) => {
      this.pokemons = data;
      this.loading = true;
    });
  }

  public pagSiguiente() {
    this.loading = false;
    this.initPag += this.tamPag;
    this.getPokemons(this.initPag);
  }

  public pagAnterior() {
    console.log('anterior');
  }
}
