import FilterButton from './FilterButton'
import FilterCategory from './FilterCategory'

const DIETARY_RESTRICTIONS = [
  "Dietary Restrictions",
  ['Vegan', 'Vegetarian', 'Gluten Free', 'Kosher']
]

const CUISINES = [
  "Cuisines",
  [
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
]

const BUDGETS = [
  "Budget",
  ['$', '$$', '$$$', '$$$$']
]

const RATINGS = [
  "Ratings",
  ['2+', '3+', '4+', '5+']
]

export default function FilterPanel() {
  return (
    <div className="bg-white text-black">
      <h1 className="mb-4 text-4xl font-bold">Your Preferences</h1>
      <FilterCategory title={DIETARY_RESTRICTIONS[0] as string} options={DIETARY_RESTRICTIONS[1] as string[]} />
      <FilterCategory title={CUISINES[0] as string} options={CUISINES[1] as string[]} />
      <FilterCategory title={BUDGETS[0] as string} options={BUDGETS[1] as string[]} />
      <FilterCategory title={RATINGS[0] as string} options={RATINGS[1] as string[]} />
    </div>
  )
}
