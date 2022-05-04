export const SET_LOADING_DATA = "SET_LOADING_DATA";
export const SET_POKEMON_LIST = "SET_POKEMON_LIST";
export const SET_SINGLE_POKERMON_DATA = "SET_SINGLE_POKEMON_DATA";

export interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
}

export interface Stat {
  name: string;
  value: number;
}

export type Gender = "male" | "female" | "both" | "genderless";

export interface SinglePokemonData extends PokemonData {
  stats: Stat[];
  flavorText: string;
  height: number;
  weight: number;
  gender: Gender;
  category: string;
  abilities: string[];
  prevPokemon: PokemonData;
  nextPokemon: PokemonData;
}

export interface State {
  loadingData: boolean;
  pokemonList: PokemonData[];
  singlePokemonData: SinglePokemonData | null;
}

interface setLoadingData {
  type: typeof SET_LOADING_DATA;
  loadingData: boolean;
}

interface setPokemonList {
  type: typeof SET_POKEMON_LIST;
  pokemonList: PokemonData[];
}

interface setSinglePokemonData {
  type: typeof SET_SINGLE_POKERMON_DATA;
  singlePokemonData: SinglePokemonData;
}

export type Dispatch = (action: Action) => void;

export type Action = setLoadingData | setPokemonList | setSinglePokemonData;
