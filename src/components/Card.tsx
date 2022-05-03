import React from 'react'
import { Link } from 'gatsby'
import Tag from './Tag'
import '../styles/card.css'
import ReplaceGender from './ReplaceGender'
import formatId from '../utils/formatId'


interface Props {
  id: number
  name: string
  imageUrl: string
  types: string[]
}

const Card = ({ id, name, imageUrl, types }: Props) => (
  <Link to={`/pokemon/${id}`}>
    <div className="m-auto mb-10 w-52 card">
      <div className="rounded-md bg-light-gray">
        <img src={imageUrl} width={200} />
      </div>
      <div className="px-2">
        <span className="text-xs font-bold text-gray-500">{formatId(id)}</span>
        <h2 className="text-2xl"><ReplaceGender name={name} /></h2>
        <div className="flex">
          {
            types.map((type: string) => (
              <Tag key={type} type={type} />
            ))
          }
        </div>
      </div>
    </div>
  </Link>
)

export default Card
