import { render, screen } from '@testing-library/react'
import HomePageComponent from './HomePageComponent'
import '@testing-library/jest-dom'

describe('<HomePageComponent />', () => {
  it('renders a heading', () => {
    render(<HomePageComponent />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})