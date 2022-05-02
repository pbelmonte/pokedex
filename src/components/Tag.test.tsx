import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tag from './Tag'

describe('Tag', () => {
  it('renders a tag with Fire type, with correct class', () => {
    const { container } = render(<Tag type="Fire" />)
    expect(screen.getByText('Fire')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('fire-tag')
  })

  it('renders a tag with Water type, with correct class', () => {
    const { container } = render(<Tag type="Water" />)
    expect(screen.getByText('Water')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('water-tag')
  })
})
