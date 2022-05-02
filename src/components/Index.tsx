import React, { useEffect, useRef, useState } from 'react'
import { getPokemonData } from '../context/pokemonContext/pokemonActions';
import { usePokemon } from "../context/pokemonContext/pokemonContext"
import Layout from "./Layout"

export default function Index() {
  const { state, dispatch } = usePokemon()
  const [shouldLoad, setShouldLoad] = useState<boolean>(true)

  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.onscroll = () => {
      const target = listRef.current ? listRef.current.clientHeight - 600 : 9999
      console.log(window.pageYOffset, target)
      if (window.pageYOffset >= target && state.pokemonList.length > 12) {
        setShouldLoad(true)
      }
    };
  });

  useEffect(() => {
    if (shouldLoad && !state.loadingData) {
      setShouldLoad(false)
      getPokemonData(state.pokemonList, dispatch)
    }
  }, [state.pokemonList, state.loadingData, shouldLoad])

  return (
    <Layout pageTitle="Pokedex">
      <div className="m-20 mb-40 flex flex-col">
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20"
          ref={listRef}
        >
          {
            state.pokemonList.map(({ id, name, imageUrl }) => (
              <div className="m-auto w-52" key={id}>
                <div className="card-background">
                  <img src={imageUrl} width="200" />
                </div>
                <p>{name}</p>
              </div>
            ))
          }
        </div>
        {
          state.pokemonList.length <= 12 && (
            <div className="m-auto mb-20">
              <button
                className="text-white p-2 px-6 rounded-md button-lightblue"
                onClick={() => getPokemonData(state.pokemonList, dispatch)}
              >
                Cargar más Pokémon
              </button>
            </div>
          )
        }
        {
          state.loadingData && (
            <div className="m-auto">
              <img className="loader" src="https://assets.pokemon.com/static2/_ui/img/chrome/loaders/pokeball_gray.png" width="50" />
            </div>
          )
        }
      </div>
    </Layout>
  )
}
