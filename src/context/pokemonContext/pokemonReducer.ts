import {
  State,
  Action,
  SET_LOADING_DATA,
  SET_POKEMON_LIST,
} from './pokemonTypes'

export const initialState: State = {
  loadingData: false,
  pokemonList: [],
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
    default: {
      return state;
    }
  }
}

export default apiReducer
