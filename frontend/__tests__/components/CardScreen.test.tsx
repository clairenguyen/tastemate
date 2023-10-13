import { act, render, screen } from '@testing-library/react'
import CardScreen from '@/components/CardScreen'
import userEvent from '@testing-library/user-event'

const restaurants = [
  {
    name: 'Dummy Restaurant',
    address: '123 Fake St.',
    cuisine: 'Fakish',
    rating: 4.5,
    phone: '2130001111',
    image_url: 'http://www.dummyrestaurant.com/pic',
    website_url: 'http://www.dummyrestaurant.com',
  },
  {
    name: 'Dummy Restaurant 2',
    address: '345 Fake St.',
    cuisine: 'Fakish',
    rating: 4.9,
    phone: '2130002222',
    image_url: 'http://www.dummyrestauranttwo.com/pic',
    website_url: 'http://www.dummyrestauranttwo.com',
  },
]

describe('CardScreen', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('displays the first restuarant from fetched restaurants', async () => {
    const likedRestaurant = jest.fn()
    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: restaurants }),
    })

    await act(() => {
      render(<CardScreen addLikedRestaurant={likedRestaurant} />)
    })

    expect(screen.getByText(/dummy restaurant/i)).toBeVisible()
    expect(screen.queryByText(/dummy restaurant 2/i)).toBeNull()
  })

  test('displays an error if fetch fails', async () => {
    const likedRestaurant = jest.fn()
    window.fetch = jest
      .fn()
      .mockRejectedValue({ message: 'failed to fetch restaurants' })

    await act(() => {
      render(<CardScreen addLikedRestaurant={likedRestaurant} />)
    })

    expect(screen.getByText(/failed to fetch/i)).toBeVisible()
  })

  test('clicking on restaurant filter button opens filter options', async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: [] }),
    })

    await act(() => {
      render(<CardScreen />)
    })

    expect(screen.queryByText('Filters')).not.toBeInTheDocument()
    
    await userEvent.click(screen.getByRole('button', { name: 'Filter' }))
    expect(screen.getByText('Filters')).toBeInTheDocument()
  })
})
