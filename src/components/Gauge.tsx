import React from 'react'
import '../styles/gauge.css'

interface Props {
  value: number
}

const Gauge = ({ value }: Props) => (
  <ul>
    {
      [...Array(15).keys()].map((item: number) => {
        if (15 - item <= value) {
          return <li className="h-2 w-14 mx-1 my-1 gauge-val full"></li>
        }
        return <li className="h-2 w-14 mx-1 my-1 gauge-val empty"></li>
      })
    }
  </ul>
)

export default Gauge
