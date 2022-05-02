import {
  Action,
  Dispatch,
  PokemonData,
  SinglePokemonData,
  SET_LOADING_DATA,
  SET_POKEMON_LIST,
  SET_SINGLE_POKERMON_DATA,
} from './pokemonTypes'

export const setLoadingData = (loadingData: boolean): Action => ({
  type: SET_LOADING_DATA,
  loadingData,
})

export const setPokemonList = (pokemonList: PokemonData[]): Action => ({
  type: SET_POKEMON_LIST,
  pokemonList,
})

export const setSinglePokemonData = (singlePokemonData: SinglePokemonData): Action => ({
  type: SET_SINGLE_POKERMON_DATA,
  singlePokemonData,
})

export const getPokemonData = async (currentList: PokemonData[], dispatch: Dispatch) => {
  if (currentList.length < 899) {
    dispatch(setLoadingData(true))
    const range = (start: number, stop: number) => Array.from({ length: (stop - start)}, (_, i) => start + i)
    const batch = range(currentList.length + 1, Math.min(currentList.length + 13, 899))
    const results: PokemonData[] = []
    await Promise.all(batch.map(async (item: number) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
      const json = await response.json()
      results.push({
        id: json.id,
        name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
        imageUrl: json.sprites?.front_default,
        types: json.types.map((item: { type: { name: string } }) => item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)),
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
    dispatch(setLoadingData(false))
  }
}

export const getSinglePokemonData = async (pokemonId: number, dispatch: Dispatch) => {
  dispatch(setLoadingData(true))
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  const json = await response.json()
  const result = {
    id: pokemonId,
    name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
    imageUrl: json.sprites?.front_default,
    types: json.types.map((item: { type: { name: string } }) => item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)),
    stats: json.stats.map((item: { base_stat: number, stat: { name: string } }) => { return { name: item.stat.name, value: item.base_stat } }),
    flavorText: '',
  }
  const speciesResponse = await fetch(json.species.url)
  const speciesJson = await speciesResponse.json()
  result.flavorText = speciesJson.flavor_text_entries[0].flavor_text
  dispatch(setSinglePokemonData(result))
  dispatch(setLoadingData(false))
}
