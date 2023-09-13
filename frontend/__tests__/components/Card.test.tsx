import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from '@/components/Card'

const FAKE_RESTAURANT = {
  name: 'Fake Restaurant'
}

describe('Card', () => {
  test('renders a card with restaurant details and buttons', () => {
    render(<Card restaurant={FAKE_RESTAURANT} onAcceptButtonClick={jest.fn} onDeclineButtonClick={jest.fn} />)

    expect(screen.getByText(/fake restaurant/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
  })

  test('clicking on the buttons calls handlers', async () => {
    const mockHandleAccept = jest.fn();
    const mockHandleDecline = jest.fn();

    render(<Card restaurant={FAKE_RESTAURANT} onAcceptButtonClick={mockHandleAccept} onDeclineButtonClick={mockHandleDecline} />)

    await userEvent.click(screen.getByRole('button', { name: 'Accept' }))

    expect(mockHandleAccept).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(mockHandleDecline).toHaveBeenCalledTimes(1)
  })
})
