import React, { useEffect, useRef, useState } from 'react'
import { getPokemonData } from '../context/pokemonContext/pokemonActions'
import { usePokemon } from "../context/pokemonContext/pokemonContext"
import Card from './Card'
import Layout from './Layout'
import Loader from './Loader'

export default function Index() {
  const { state, dispatch } = usePokemon()
  const [shouldLoad, setShouldLoad] = useState<boolean>(true)

  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.onscroll = () => {
      const target = listRef.current ? listRef.current.clientHeight : 9999
      if (window.pageYOffset + window.innerHeight >= target && state.pokemonList.length > 12) {
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
    <Layout pageTitle="Pokédex">
      <div className="m-20 mb-40 flex flex-col">
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20"
          ref={listRef}
        >
          {
            state.pokemonList.map(({ id, name, imageUrl, types }) => (
              <Card key={id} id={id} name={name} imageUrl={imageUrl} types={types} />
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
                Load more Pokémon
              </button>
            </div>
          )
        }
        <Loader loading={state.loadingData} />
      </div>
    </Layout>
  )
}
