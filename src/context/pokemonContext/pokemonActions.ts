import capitalize from "../../utils/capitalize";
import findEnglish from "../../utils/findEnglish";
import {
  Action,
  Dispatch,
  Gender,
  PokemonData,
  SET_LOADING_DATA,
  SET_POKEMON_LIST,
  SET_SINGLE_POKERMON_DATA,
  SinglePokemonData,
} from "./pokemonTypes";

export const setLoadingData = (loadingData: boolean): Action => ({
  type: SET_LOADING_DATA,
  loadingData,
});

export const setPokemonList = (pokemonList: PokemonData[]): Action => ({
  type: SET_POKEMON_LIST,
  pokemonList,
});

export const setSinglePokemonData = (
  singlePokemonData: SinglePokemonData,
): Action => ({
  type: SET_SINGLE_POKERMON_DATA,
  singlePokemonData,
});

export const getPokemonData = async (
  currentList: PokemonData[],
  dispatch: Dispatch,
) => {
  if (currentList.length < 899) {
    dispatch(setLoadingData(true));
    const range = (start: number, stop: number) =>
      Array.from({ length: stop - start }, (_, i) => start + i);
    const batch = range(
      currentList.length + 1,
      Math.min(currentList.length + 13, 899),
    );
    const results: PokemonData[] = [];
    await Promise.all(
      batch.map(async (item: number) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${item}`,
        );
        const json = await response.json();
        results.push({
          id: json.id,
          name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
          imageUrl: json.sprites?.front_default,
          types: json.types.map((typeItem: { type: { name: string } }) =>
            capitalize(typeItem.type.name),
          ),
        });
      }),
    );
    results.sort((a: PokemonData, b: PokemonData) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    dispatch(setPokemonList([...currentList, ...results]));
    dispatch(setLoadingData(false));
  }
};

export const getSinglePokemonData = async (
  pokemonId: number,
  dispatch: Dispatch,
) => {
  dispatch(setLoadingData(true));
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  const json = await response.json();
  const result = {
    id: pokemonId,
    name: capitalize(json.name),
    imageUrl: json.sprites?.front_default,
    types: json.types.map((item: { type: { name: string } }) =>
      capitalize(item.type.name),
    ),
    stats: json.stats.map(
      (item: { base_stat: number; stat: { name: string } }) => {
        return { name: item.stat.name, value: item.base_stat };
      },
    ),
    flavorText: "",
    height: json.height,
    weight: json.weight,
    gender: <Gender>"both",
    category: "",
    abilities: json.abilities.reduce(
      (
        res: string[],
        item: { ability: { name: string }; is_hidden: boolean },
      ) => {
        if (!item.is_hidden) {
          return res.concat(item.ability.name);
        }
        return res;
      },
      [],
    ),
    prevPokemon: { id: -1, name: "", imageUrl: "", types: [] },
    nextPokemon: { id: -1, name: "", imageUrl: "", types: [] },
  };

  const speciesResponse = await fetch(json.species.url);
  const speciesJson = await speciesResponse.json();

  const englishFlavorText = findEnglish(speciesJson.flavor_text_entries);
  result.flavorText = englishFlavorText
    ? (englishFlavorText.flavor_text as string)
    : "";

  if (speciesJson.gender_rate === -1) {
    result.gender = "genderless";
  } else if (speciesJson.gender_rate === 0) {
    result.gender = "male";
  } else if (speciesJson.gender_rate === 8) {
    result.gender = "female";
  }

  const englishCategory = findEnglish(speciesJson.genera);
  result.category = englishCategory
    ? (englishCategory.genus as string).split(" Pokémon")[0]
    : "";

  const prevId = pokemonId === 1 ? 898 : pokemonId - 1;
  const nextId = pokemonId === 898 ? 1 : pokemonId + 1;
  const prevResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${prevId}`,
  );
  const prevJson = await prevResponse.json();
  result.prevPokemon = {
    id: prevJson.id,
    name: prevJson.name.charAt(0).toUpperCase() + prevJson.name.slice(1),
    imageUrl: prevJson.sprites?.front_default,
    types: prevJson.types.map(
      (item: { type: { name: string } }) =>
        item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1),
    ),
  };
  const nextResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nextId}`,
  );
  const nextJson = await nextResponse.json();
  result.nextPokemon = {
    id: nextJson.id,
    name: nextJson.name.charAt(0).toUpperCase() + nextJson.name.slice(1),
    imageUrl: nextJson.sprites?.front_default,
    types: nextJson.types.map(
      (item: { type: { name: string } }) =>
        item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1),
    ),
  };

  dispatch(setSinglePokemonData(result));
  dispatch(setLoadingData(false));
};
