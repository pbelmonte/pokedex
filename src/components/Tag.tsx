import React from 'react'
import classNames from 'classnames'
import { backgroundClassMap, textClassMap } from '../utils/dynamicColorsMaps'


interface Props {
  type: string
  size?: 'small' | 'big'
}

const Tag = ({ type, size = 'small' }: Props) => (
  <div key={type} className={classNames(`px-4 py-0.5 mx-1 my-2 text-xs rounded-sm ${backgroundClassMap[type.toLowerCase()]} ${textClassMap[type.toLowerCase()]}`, { 'text-xl': size === 'big' })}>
    {type}
  </div>
)

export default Tag
