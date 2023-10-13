import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardCarousel from '@/components/CardCarousel'

const FAKE_RESTAURANT = {
  name: 'Fake Restaurant',
  address: '123 Fake St.',
  cuisine: 'Fakish',
  rating: 4.5,
  phone: '2130001111',
  image_url: 'http://www.dummyrestaurant.com/pic',
  website_url: 'http://www.dummyrestaurant.com',
}

describe('CardCarousel', () => {
  test('displays loading screen when there are no restaurants', () => {
    render(<CardCarousel restaurants={[]} />)
    expect(screen.getByText(/loading.../i)).toBeVisible()
  })

  test('displays only the first restaurant and its associated data on initial load', () => {
    render(
      <CardCarousel
        restaurants={[
          FAKE_RESTAURANT,
          { ...FAKE_RESTAURANT, name: 'Dummy Restaurant' },
        ]}
      />,
    )

    expect(screen.getByText(/fake restaurant/i)).toBeVisible()
    expect(screen.queryByText(/dummy restaurant/i)).not.toBeInTheDocument()
    expect(screen.queryAllByRole('img')).toHaveLength(1)
  })

  test('clicking on decline button sets placeholder status', async () => {
    render(<CardCarousel restaurants={[FAKE_RESTAURANT]} />)

    expect(screen.getByText('Button status: none')).toBeVisible()

    await userEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(
      screen.getByText('Button status: decline button clicked'),
    ).toBeVisible()
  })

  test('clicking on accept button calls the liked function', async () => {
    const likeRestaurant = jest.fn()

    render(<CardCarousel restaurants={[FAKE_RESTAURANT]} addLikedRestaurant={likeRestaurant} />)

    await userEvent.click(screen.getByRole('button', { name: 'Accept' }))

    expect(likeRestaurant).toHaveBeenCalledWith(FAKE_RESTAURANT)
  })
})
