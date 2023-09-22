import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  // Skipping this test for now as it is failing due to:
  // ReferenceError: fetch is not defined (in CardScreen)
  // TODO: address in separate PR
  it.skip('renders a heading', () => {
    render(<Home />)

    const myElem = screen.getByText('TasteMate')

    expect(myElem).toBeInTheDocument()
  })
})
