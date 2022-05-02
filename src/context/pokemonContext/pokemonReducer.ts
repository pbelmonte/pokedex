import {
  State,
  Action,
  SET_LOADING_DATA,
  SET_POKEMON_LIST,
  SET_SINGLE_POKERMON_DATA,
} from './pokemonTypes'

export const initialState: State = {
  loadingData: false,
  pokemonList: [],
  singlePokemonData: null,
}

const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_LOADING_DATA: {
      return {
        ...state,
        loadingData: action.loadingData,
      }
    }
    case SET_POKEMON_LIST: {
      return {
        ...state,
        pokemonList: action.pokemonList,
      }
    }
    case SET_SINGLE_POKERMON_DATA: {
      return {
        ...state,
        singlePokemonData: action.singlePokemonData,
      }
    }
    default: {
      return state;
    }
  }
}

export default apiReducer
