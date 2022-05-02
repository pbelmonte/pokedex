import React from 'react'
import SinglePokemon from '../components/SinglePokemon'
import { PokemonProvider } from '../context/pokemonContext/pokemonContext'


interface Props {
  pageContext: any
}

const PokemonPage = ({ pageContext }: Props) => (
  <PokemonProvider>
    <SinglePokemon pokemonId={pageContext.id} />
  </PokemonProvider>
)

export default PokemonPage
