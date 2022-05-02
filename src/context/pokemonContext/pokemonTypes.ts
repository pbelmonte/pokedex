export const SET_LOADING_DATA = "SET_LOADING_DATA";
export const SET_POKEMON_LIST = "SET_POKEMON_LIST";

export interface PokemonData {
  id: number
  name: string
  imageUrl: string
}

export interface State {
  loadingData: boolean
  pokemonList: PokemonData[]
}

interface setLoadingData {
  type: typeof SET_LOADING_DATA
  loadingData: boolean
}

interface setPokemonList {
  type: typeof SET_POKEMON_LIST
  pokemonList: PokemonData[]
}

export type Dispatch = (action: Action) => void;

export type Action =
  | setLoadingData
  | setPokemonList
