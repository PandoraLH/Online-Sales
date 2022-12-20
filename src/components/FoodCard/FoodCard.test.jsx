import { render, screen } from '@testing-library/react'
import FoodCard from './FoodCard'
import '@testing-library/jest-dom'

describe('<FoodCard />', () => {
  it('renders a heading', () => {
    render(<FoodCard />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})