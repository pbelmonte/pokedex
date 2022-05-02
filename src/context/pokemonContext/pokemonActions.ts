import {
  Action,
  Dispatch,
  PokemonData,
  SET_LOADING_DATA,
  SET_POKEMON_LIST,
} from './pokemonTypes'

export const setLoadingData = (loadingData: boolean): Action => ({
  type: SET_LOADING_DATA,
  loadingData,
})

export const setPokemonList = (pokemonList: PokemonData[]): Action => ({
  type: SET_POKEMON_LIST,
  pokemonList,
})

export const getPokemonData = async (currentList: PokemonData[], dispatch: Dispatch) => {
  dispatch(setLoadingData(true));
  const range = (start: number, stop: number) => Array.from({ length: (stop - start)}, (_, i) => start + i)
  const batch = range(currentList.length + 1, currentList.length + 13)
  const results: PokemonData[] = []
  await Promise.all(batch.map(async (item: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
    const json = await response.json()
    results.push({
      id: json.id,
      name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
      imageUrl: json.sprites?.front_default,
    })
  }))
  results.sort((a: PokemonData, b: PokemonData) => {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  })
  dispatch(setPokemonList([...currentList, ...results]))
  dispatch(setLoadingData(false));
}
