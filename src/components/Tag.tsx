import React from 'react'
import classNames from 'classnames'
import '../styles/tag.css'


interface Props {
  type: string
}

const Tag = ({ type }: Props) => (
  <div key={type} className={classNames('px-4 py-0.5 mx-1 my-2 text-xs rounded-sm', { [`${type.toLowerCase()}-tag`]: true })}>
    {type}
  </div>
)

export default Tag
