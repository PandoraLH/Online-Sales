import { render, screen } from '@testing-library/react'
import OpenFoodCard from './OpenFoodCard'
import '@testing-library/jest-dom'

describe('<OpenFoodCard />', () => {
  it('renders a heading', () => {
    render(<OpenFoodCard />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})