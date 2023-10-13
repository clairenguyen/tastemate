import { render, screen } from '@testing-library/react'
import LikeList from '@/components/LikeList'

const FAKE_RESTAURANT_ONE = {
  name: 'Fake Restaurant 1',
  address: '123 Fake St.',
  cuisine: 'Fakish',
  rating: 4.5,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

const FAKE_RESTAURANT_TWO = {
  name: 'Fake Restaurant 2',
  address: '123 Fake St.',
  cuisine: 'Asian',
  rating: 4.0,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

const FAKE_RESTAURANT_THREE = {
  name: 'Fake Restaurant 3',
  address: '123 Fake St.',
  cuisine: 'American',
  rating: 3.5,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

const LIKED_RESTAURANTS = [FAKE_RESTAURANT_ONE, FAKE_RESTAURANT_TWO, FAKE_RESTAURANT_THREE]

describe('LikeList', () => {
  it('renders the TasteMate h1', () => {
    render(<LikeList likedRestaurants={[]} />)
    const myElem = screen.getByText('TasteMate')

    expect(myElem).toBeInTheDocument()
  })

  it('renders headers for "Like" lists ', () => {
    render(<LikeList likedRestaurants={[]} />)
    const restaurantsHeader = screen.getByText('Restaurants')
    const peopleHeader = screen.getByText('People')

    expect(restaurantsHeader).toBeInTheDocument()
    expect(peopleHeader).toBeInTheDocument()
  })

  it('renders a list of liked restaurants', () => {
    render(<LikeList likedRestaurants={LIKED_RESTAURANTS} />)
    const listedRestaurant = screen.getByText('Fake Restaurant 1')

    expect(listedRestaurant).toBeInTheDocument()

    expect(screen.getAllByRole("listitem").length).toEqual(3)
  })
})
