import React from 'react'
import '../styles/loader.css'

import pokeball from '../images/pokeball_gray.png'


interface Props {
  loading: boolean
}

const Loader = ({ loading }: Props) => (
  loading
    ? (
      <div className="m-auto">
        <img className="loader" src={pokeball} alt="loading" width="50" />
      </div>
    ) : <></>
)

export default Loader
