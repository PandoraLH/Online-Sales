import { render, screen } from '@testing-library/react'
import TestComponent from './TestComponent'
import '@testing-library/jest-dom'

describe('<TestComponent />', () => {
  it('renders a heading', () => {
    render(<TestComponent />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})