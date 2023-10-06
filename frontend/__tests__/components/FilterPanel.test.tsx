import { render, screen } from '@testing-library/react'
import FilterPanel from '../../src/components/FilterPanel'
import '@testing-library/jest-dom'

describe(FilterPanel, () => {
  it('renders a preferences header', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Your Preferences')).toBeInTheDocument()
  })

  it('renders a FilterCategory for each Dietary Restrictions filter', () => {
    const DIETARY_RESTRICTIONS = [
      'Vegan',
      'Vegetarian',
      'Gluten Free',
      'Kosher',
    ]

    render(<FilterPanel />)

    expect(screen.getByText('Dietary Restrictions')).toBeInTheDocument()
    DIETARY_RESTRICTIONS.forEach((restriction) => {
      expect(screen.getByText(restriction)).toBeInTheDocument()
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

    expect(screen.getByText('Cuisines')).toBeInTheDocument()
    CUISINES.forEach((cuisine) => {
      expect(screen.getByText(cuisine)).toBeInTheDocument()
    })
  })

  it('renders a FilterCategory for each Budget filter', () => {
    const BUDGET = ['$', '$$', '$$$', '$$$$']

    render(<FilterPanel />)

    expect(screen.getByText('Budget')).toBeInTheDocument()
    BUDGET.forEach((budget) => {
      expect(screen.getByText(budget)).toBeInTheDocument()
    })
  })

  it('renders a FilterCategory for each Ratings filter', () => {
    const RATINGS = ['2+', '3+', '4+', '5+']

    render(<FilterPanel />)

    expect(screen.getByText('Ratings')).toBeInTheDocument()
    RATINGS.forEach((rating) => {
      expect(screen.getByText(rating)).toBeInTheDocument()
    })
  })

  it('renders a submit button', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('renders a reset button', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })
})
