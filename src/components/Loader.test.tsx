import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loader from './Loader'

describe('Loader', () => {
  it('renders a loading icon when loading prop is true', () => {
    const { getAllByAltText } = render(<Loader loading />)
    const img = getAllByAltText('loading')[0]
    expect(img).toBeInTheDocument()
  })

  it('renders nothing when loading prop is false', () => {
    const { container } = render(<Loader loading={false} />)
    expect(container).toBeEmptyDOMElement()
  })
})
