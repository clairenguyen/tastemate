import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RestaurantCard from '@/components/RestaurantCard'

const FAKE_RESTAURANT = {
  name: 'Dummy Restaurant',
  address: '123 Fake St.',
  cuisine: 'Fakish',
  rating: 4.5,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

describe('RestaurantCard', () => {
  test('displays a card with restaurant details', () => {
    render(<RestaurantCard restaurant={FAKE_RESTAURANT} />)

    expect(screen.getByText(FAKE_RESTAURANT.name)).toBeVisible()
    expect(screen.getByText(FAKE_RESTAURANT.website_url)).toBeVisible()
    expect(screen.getByText(FAKE_RESTAURANT.address)).toBeVisible()
    expect(screen.getByText(FAKE_RESTAURANT.cuisine)).toBeVisible()
    expect(screen.getByText(FAKE_RESTAURANT.rating)).toBeVisible()
    expect(screen.getByText(FAKE_RESTAURANT.phone)).toBeVisible()

    const image = screen.getByRole('img', {
      name: `Image of ${FAKE_RESTAURANT.name}`,
    })
    expect(image).toBeVisible()

    const decodedSrc = decodeURIComponent(image.src)
    expect(decodedSrc).toContain(FAKE_RESTAURANT.image_url)
  })

  test('displays buttons if provided button handlers', async () => {
    render(
      <RestaurantCard
        restaurant={FAKE_RESTAURANT}
        onAcceptButtonClick={jest.fn}
        onDeclineButtonClick={jest.fn}
      />,
    )

    expect(screen.getByRole('button', { name: 'Accept' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeVisible()
  })

  test('clicking on the buttons calls handlers', async () => {
    const mockHandleAccept = jest.fn()
    const mockHandleDecline = jest.fn()

    render(
      <RestaurantCard
        restaurant={FAKE_RESTAURANT}
        onAcceptButtonClick={mockHandleAccept}
        onDeclineButtonClick={mockHandleDecline}
      />,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Accept' }))

    expect(mockHandleAccept).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(mockHandleDecline).toHaveBeenCalledTimes(1)
  })
})
