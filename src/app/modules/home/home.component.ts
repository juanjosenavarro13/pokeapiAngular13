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
  constructor(private _service: HomeService) {
    this.loading = false;
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons(init: number = 0, end: number = 5): void {
    this._service.getPokemons(init, end).then((data) => {
      this.pokemons = data;
      console.log(data);
      this.loading = true;
    });
  }
}
