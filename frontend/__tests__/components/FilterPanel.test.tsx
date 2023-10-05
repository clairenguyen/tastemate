import { render, screen } from '@testing-library/react'
import FilterPanel from '../../src/components/FilterPanel'
import '@testing-library/jest-dom'

describe(FilterPanel, () => {
  it('renders a preferences header', () => {
    render(<FilterPanel />)
    expect(screen.getByText('Your Preferences')).toBeInTheDocument()
  })

  it('renders a FilterButton for each dietary restriction', () => {
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

  it('renders a FilterButton for each cuisine', () => {
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

  it('renders a FilterButton for each budget', () => {
    const BUDGETS = ['$', '$$', '$$$', '$$$$']

    render(<FilterPanel />)

    expect(screen.getByText('Budget')).toBeInTheDocument()
    BUDGETS.forEach((budget) => {
      expect(screen.getByText(budget)).toBeInTheDocument()
    })
  })

  it('renders a FilterButton for each rating', () => {
    const RATINGS = ['2+', '3+', '4+', '5+']

    render(<FilterPanel />)

    expect(screen.getByText('Ratings')).toBeInTheDocument()
    RATINGS.forEach((rating) => {
      expect(screen.getByText(rating)).toBeInTheDocument()
    })
  })
})
