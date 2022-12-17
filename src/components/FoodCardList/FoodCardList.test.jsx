import { render, screen } from '@testing-library/react'
import FoodCardList from './FoodCardList'
import '@testing-library/jest-dom'

describe('<FoodCardList />', () => {
  it('renders a heading', () => {
    render(<FoodCardList />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})