import React from 'react'
import Tag from './Tag'
import '../styles/card.css'


interface Props {
  id: number
  name: string
  imageUrl: string
  types: string[]
}

const Card = ({ id, name, imageUrl, types }: Props) => (
  <div className="m-auto mb-10 w-52 card">
    <div className="rounded-md card-background">
      <img src={imageUrl} width="200" />
    </div>
    <div className="px-2">
      <span className="text-xs font-bold text-gray-500">{`#${id.toString().padStart(3, '0')}`}</span>
      <h2 className="text-2xl">{name}</h2>
      <div className="flex">
        {
          types.map((type: string) => (
            <Tag key={type} type={type} />
          ))
        }
      </div>
    </div>
  </div>
)

export default Card
