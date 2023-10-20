import { render, screen } from '@testing-library/react'
import LikeList from '@/components/LikeList'

const fakeRestaurantOne = {
  name: 'Fake Restaurant 1',
  address: '123 Fake St.',
  cuisine: 'Fakish',
  rating: 4.5,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

const fakeRestaurantTwo = {
  name: 'Fake Restaurant 2',
  address: '123 Fake St.',
  cuisine: 'Asian',
  rating: 4.0,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

const fakeRestaurantThree = {
  name: 'Fake Restaurant 3',
  address: '123 Fake St.',
  cuisine: 'American',
  rating: 3.5,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

const likedRestaurants = [
  fakeRestaurantOne,
  fakeRestaurantTwo,
  fakeRestaurantThree,
]

describe('LikeList', () => {
  it('renders the TasteMate header', () => {
    render(<LikeList likedRestaurants={[]} />)
    const header = screen.getByText('TasteMate')

    expect(header).toBeVisible()
  })

  it('renders headers for "Like" lists ', () => {
    render(<LikeList likedRestaurants={[]} />)
    const restaurantsHeader = screen.getByText('Restaurants')
    const peopleHeader = screen.getByText('People')

    expect(restaurantsHeader).toBeVisible()
    expect(peopleHeader).toBeVisible()
  })

  it('renders a list of liked restaurants', () => {
    render(<LikeList likedRestaurants={likedRestaurants} />)
    const listedRestaurant = screen.getByText('Fake Restaurant 1')

    expect(listedRestaurant).toBeVisible()

    expect(screen.getAllByRole('listitem').length).toEqual(3)
  })
})
