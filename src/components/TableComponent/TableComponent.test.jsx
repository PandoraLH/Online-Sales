import { render, screen } from '@testing-library/react'
import TableComponent from './TableComponent'
import '@testing-library/jest-dom'

describe('<TableComponent />', () => {
  it('renders a heading', () => {
    render(<TableComponent />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})