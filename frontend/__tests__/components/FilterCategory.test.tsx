import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import FilterCategory from '../../src/components/FilterCategory'

describe(FilterCategory, () => {
  it('displays a filter button for each option', () => {
    const OPTIONS = ['Option 1', 'Option 2', 'Option 3']

    render(<FilterCategory title="Test Category" options={OPTIONS} />)

    expect(screen.getByText('Test Category')).toBeVisible()
    OPTIONS.forEach((option) => {
      expect(screen.getByText(option)).toBeVisible()
    })
  })
})
