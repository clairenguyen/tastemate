import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RestaurantCard from '@/components/RestaurantCard'

const FAKE_RESTAURANT = {
  name: 'Dummy Restaurant',
  address: '123 Fake St.',
  cuisine: 'Fakish',
  rating: 4.5,
  phone: "2130001111",
  image_url: "www.dummyrestaurant.com/pic",
  website_url: "www.dummyrestaurant.com"
}

describe('RestaurantCard', () => {
  test('renders a card with restaurant details and buttons', () => {
    render(<RestaurantCard restaurant={FAKE_RESTAURANT} />)

    expect(screen.getByText(FAKE_RESTAURANT.name)).toBeInTheDocument()
    expect(screen.getByText(FAKE_RESTAURANT.address)).toBeInTheDocument()
    expect(screen.getByText(FAKE_RESTAURANT.cuisine)).toBeInTheDocument()
    expect(screen.getByText(FAKE_RESTAURANT.rating)).toBeInTheDocument()
    expect(screen.getByText(FAKE_RESTAURANT.phone)).toBeInTheDocument()
    expect(screen.getByText(FAKE_RESTAURANT.image_url)).toBeInTheDocument()
    expect(screen.getByText(FAKE_RESTAURANT.website_url)).toBeInTheDocument()
  })

  test('renders buttons if provided button handlers', async () => {
    render(<RestaurantCard restaurant={FAKE_RESTAURANT} onAcceptButtonClick={jest.fn} onDeclineButtonClick={jest.fn} />)

    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
  })

  test('clicking on the buttons calls handlers', async () => {
    const mockHandleAccept = jest.fn();
    const mockHandleDecline = jest.fn();

    render(<RestaurantCard restaurant={FAKE_RESTAURANT} onAcceptButtonClick={mockHandleAccept} onDeclineButtonClick={mockHandleDecline} />)

    await userEvent.click(screen.getByRole('button', { name: 'Accept' }))

    expect(mockHandleAccept).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(mockHandleDecline).toHaveBeenCalledTimes(1)
  })
})
