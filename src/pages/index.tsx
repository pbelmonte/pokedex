import React from 'react'
import Index from '../components/Index'
import { PokemonProvider } from '../context/pokemonContext/pokemonContext'

const IndexPage = () => (
  <PokemonProvider>
    <Index />
  </PokemonProvider>
)

export default IndexPage
