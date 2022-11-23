import { render, screen } from '@testing-library/react'
import TestComponent1 from './TestComponent1'
import '@testing-library/jest-dom'

describe('<TestComponent1 />', () => {
  it('renders a heading', () => {
    render(<TestComponent1 />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})