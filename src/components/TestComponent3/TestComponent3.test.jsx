import { render, screen } from '@testing-library/react'
import TestComponent3 from './TestComponent3'
import '@testing-library/jest-dom'

describe('<TestComponent3 />', () => {
  it('renders a heading', () => {
    render(<TestComponent3 />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})