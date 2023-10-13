import {act, render, screen} from '@testing-library/react'
import Home from '@/app/page'
import userEvent from "@testing-library/user-event";

describe('Home', () => {
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

  beforeEach(async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: restaurants }),
    })

    await act(() => {
      render(<Home />)
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders the match list', () => {
    expect(screen.getByText(/tastemate/i)).toBeVisible()
    expect(screen.getByText(/restaurants/i)).toBeVisible()
    expect(screen.getByText(/people/i)).toBeVisible()
  })

  it('renders the card screen', () => {
    expect(screen.getByTestId('card-screen')).toBeVisible()
  })

  describe('when accept button is clicked',  () => {
    it('the restaurant is saved to the like list', async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Accept' }))

      const matchList = screen.getByTestId('match-list')

      expect(matchList).toHaveTextContent('Dummy Restaurant')
    })
  })
})
