import React, { useEffect } from 'react'
import { getSinglePokemonData } from '../context/pokemonContext/pokemonActions'
import { usePokemon } from '../context/pokemonContext/pokemonContext'
import { Stat } from '../context/pokemonContext/pokemonTypes'
import Loader from './Loader'
import '../styles/singlePokemon.css'
import Gauge from './Gauge'


interface Props {
  pokemonId: number
}

const SinglePokemon = ({ pokemonId }: Props) => {
  const { state, dispatch } = usePokemon()

  useEffect(() => {
    getSinglePokemonData(pokemonId, dispatch)
  }, [])

  const translateStat = (name: string): string => {
    const separated = name.split('-')
    const capitalized = separated.map((item: string) => item.charAt(0).toUpperCase() + item.slice(1))
    return capitalized.join(' ')
  }

  return (
    <div className="mx-auto max-w-7xl main-container">
      <title>{state.singlePokemonData ? state.singlePokemonData.name : 'Pokémon'}</title>
      <main className="mx-auto py-5 max-w-5xl flex flex-col content-wrapper">
        <Loader loading={state.loadingData} />
        {
          state.singlePokemonData && (
            <>
              <h1 className="text-3xl mx-auto mt-10">{state.singlePokemonData.name}</h1>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-[60px]">
                <div className="flex flex-col m-3">
                  <div className="rounded-md card-background">
                    <img src={state.singlePokemonData.imageUrl} width="500" />
                  </div>
                  <div className="p-6 mt-4 rounded-md stats">
                    Stats
                    <div className="flex">
                      {
                        state.singlePokemonData.stats.map((item: Stat) => (
                          <div className="flex flex-col">
                            <Gauge value={(item.value / 17) + 1} />
                            <span className="text-xs text-center font-bold w-16">{translateStat(item.name)}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="flex flex-col m-3">
                  <p>{state.singlePokemonData.flavorText}</p>
                </div>
              </div>
            </>
          )
        }
      </main>
    </div>
  )
}

export default SinglePokemon
