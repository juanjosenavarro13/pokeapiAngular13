export class getListPokemonsModel {
  constructor(
    public count: number,
    public previous: string,
    public next: string,
    public results: Array<getListPokemonsResultsModel>
  ) {}
}

export class getListPokemonsResultsModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonModel {
  constructor(
    public abilities: Array<pokemonAbilitiesModel>,
    public base_experience: number,
    public forms: Array<pokemonFormsModel>,
    public game_indices: Array<pokemonGameIndicesModel>,
    public height: number,
    public held_items: Array<pokemonHeldItemsModel>,
    public id: number,
    public is_default: boolean,
    public location_area_encounters: string,
    public moves: Array<pokemonMovesModel>,
    public name: string,
    public order: number,
    public species: pokemonSpeciesModel,
    public sprites: pokemonSpritesModel,
    public stats: Array<pokemonStatsModel>,
    public types: Array<pokemonTypesModel>,
    public weight: number
  ) {}
}

export class pokemonTypesModel {
  constructor(public slot: number, public type: pokemonTypeModel) {}
}

export class pokemonTypeModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonStatsModel {
  constructor(
    public base_stat: number,
    public effort: number,
    public stat: pokemonStatsStatModel
  ) {}
}

export class pokemonStatsStatModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonSpritesModel {
  constructor(
    public back_default: string,
    public back_female: string,
    public back_shiny: string,
    public back_shiny_female: string,
    public front_default: string,
    public front_female: string,
    public front_shiny: string,
    public front_shiny_female: string
  ) {}
}

export class pokemonSpeciesModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonMovesModel {
  constructor(public move: movePokemonModel) {}
}

export class movePokemonModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonHeldItemsModel {
  constructor(
    public item: pokemonItemModel,
    public version_details: Array<pokemonVersionDetailsModel>
  ) {}
}

export class pokemonVersionDetailsModel {
  constructor(public rarity: number, public version: pokemonVersionModel) {}
}

export class pokemonItemModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonGameIndicesModel {
  constructor(public game_index: number, public version: pokemonVersionModel) {}
}

export class pokemonVersionModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonFormsModel {
  constructor(public name: string, public url: string) {}
}

export class pokemonAbilitiesModel {
  constructor(
    public ability: pokemonAbilityModel,
    public is_hidden: boolean,
    public slot: number
  ) {}
}

export class pokemonAbilityModel {
  constructor(public name: string, public url: string) {}
}
