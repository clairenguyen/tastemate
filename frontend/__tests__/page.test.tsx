import { act, render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  beforeEach(async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: [] }),
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
})
