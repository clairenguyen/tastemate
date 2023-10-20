import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import FilterCategory from '../../src/components/FilterCategory'

describe(FilterCategory, () => {
  it('displays a filter button for each option', () => {
    const options = ['Option 1', 'Option 2', 'Option 3']

    render(<FilterCategory title="Test Category" options={options} />)

    expect(screen.getByText('Test Category')).toBeVisible()
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeVisible()
    })
  })
})
