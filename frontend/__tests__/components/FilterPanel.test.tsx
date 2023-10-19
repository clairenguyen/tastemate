import { render, screen } from '@testing-library/react'
import FilterPanel from '../../src/components/FilterPanel'
import '@testing-library/jest-dom'

describe(FilterPanel, () => {
  it('renders a preferences header', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Your Preferences')).toBeVisible()
  })

  it('displays a filter category for each Dietary Restrictions filter', () => {
    const dietary_restrictions = [
      'Vegan',
      'Vegetarian',
      'Gluten Free',
      'Kosher',
    ]

    render(<FilterPanel />)

    expect(screen.getByText('Dietary Restrictions')).toBeVisible()
    dietary_restrictions.forEach((restriction) => {
      expect(screen.getByText(restriction)).toBeVisible()
    })
  })

  it('displays a filter category for each Cuisines filter', () => {
    const cuisines = [
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
    cuisines.forEach((cuisine) => {
      expect(screen.getByText(cuisine)).toBeVisible()
    })
  })

  it('displays a filter category for each Budget filter', () => {
    const budget = ['$', '$$', '$$$', '$$$$']

    render(<FilterPanel />)

    expect(screen.getByText('Budget')).toBeVisible()
    budget.forEach((budget) => {
      expect(screen.getByText(budget)).toBeVisible()
    })
  })

  it('displays a filter category for each Ratings filter', () => {
    const ratings = ['2+', '3+', '4+', '5+']

    render(<FilterPanel />)

    expect(screen.getByText('Ratings')).toBeVisible()
    ratings.forEach((rating) => {
      expect(screen.getByText(rating)).toBeVisible()
    })
  })

  it('displays a submit button', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Submit')).toBeVisible()
  })

  it('displays a reset button', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Reset')).toBeVisible()
  })
})
