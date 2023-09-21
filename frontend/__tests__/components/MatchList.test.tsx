import { render, screen } from '@testing-library/react'
import MatchList from '@/components/MatchList'

describe('MatchList', () => {
  it('renders the TasteMate h1', () => {
    render(<MatchList />)
    const myElem = screen.getByText('TasteMate')

    expect(myElem).toBeInTheDocument()
  })

  it('renders headers for "Like" lists ', () => {
    render(<MatchList />)
    const restaurantsHeader = screen.getByText('Restaurants')
    const peopleHeader = screen.getByText('People')

    expect(restaurantsHeader).toBeInTheDocument()
    expect(peopleHeader).toBeInTheDocument()
  })
})
