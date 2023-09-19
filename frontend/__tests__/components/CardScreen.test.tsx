import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardScreen from '@/components/CardScreen'

describe('CardScreen', () => {
  beforeEach(() => {
    render(<CardScreen />)
  })

  test('renders a card based on the current restaurant', () => {
    expect(screen.getByText(/dummy restaurant/i)).toBeInTheDocument()
  })

  test('clicking on card buttons sets placeholder status', async () => {
    expect(screen.getByText('Button status: none')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Accept' }))

    expect(screen.getByText('Button status: accept button clicked')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Decline' }))

    expect(screen.getByText('Button status: decline button clicked')).toBeInTheDocument()
  })
})
