import { render, screen } from '@testing-library/react'
import FilterPanel from '../../src/components/FilterPanel'
import '@testing-library/jest-dom'

describe(FilterPanel, () => {
  it('renders a preferences header', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Your Preferences')).toBeInTheDocument()
  })
})
