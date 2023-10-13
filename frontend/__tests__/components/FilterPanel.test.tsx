import { render, screen } from '@testing-library/react'
import FilterPanel from '../../src/components/FilterPanel'
import '@testing-library/jest-dom'

describe(FilterPanel, () => {
  it('renders a preferences header', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Your Preferences')).toBeVisible()
  })

  it('renders a FilterCategory for each Dietary Restrictions filter', () => {
    const DIETARY_RESTRICTIONS = [
      'Vegan',
      'Vegetarian',
      'Gluten Free',
      'Kosher',
    ]

    render(<FilterPanel />)

    expect(screen.getByText('Dietary Restrictions')).toBeVisible()
    DIETARY_RESTRICTIONS.forEach((restriction) => {
      expect(screen.getByText(restriction)).toBeVisible()
    })
  })

  it('renders a FilterCategory for each Cuisines filter', () => {
    const CUISINES = [
      'American',
      'Italian',
      'Fast Food',
      'Pizza',
      'Mexican',
      'Asian',
      'Tacos',
      'Mediterranean',
      'Sushi',
    ]

    render(<FilterPanel />)

    expect(screen.getByText('Cuisines')).toBeVisible()
    CUISINES.forEach((cuisine) => {
      expect(screen.getByText(cuisine)).toBeVisible()
    })
  })

  it('renders a FilterCategory for each Budget filter', () => {
    const BUDGET = ['$', '$$', '$$$', '$$$$']

    render(<FilterPanel />)

    expect(screen.getByText('Budget')).toBeVisible()
    BUDGET.forEach((budget) => {
      expect(screen.getByText(budget)).toBeVisible()
    })
  })

  it('renders a FilterCategory for each Ratings filter', () => {
    const RATINGS = ['2+', '3+', '4+', '5+']

    render(<FilterPanel />)

    expect(screen.getByText('Ratings')).toBeVisible()
    RATINGS.forEach((rating) => {
      expect(screen.getByText(rating)).toBeVisible()
    })
  })

  it('renders a submit button', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Submit')).toBeVisible()
  })

  it('renders a reset button', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Reset')).toBeVisible()
  })
})
