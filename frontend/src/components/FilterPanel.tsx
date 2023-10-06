import FilterButton from './FilterButton'
import FilterCategory from './FilterCategory'

const FILTERS = [
  ['Dietary Restrictions', ['Vegan', 'Vegetarian', 'Gluten Free', 'Kosher']],
  [
    'Cuisines',
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
    ],
  ],
  ['Budget', ['$', '$$', '$$$', '$$$$']],
  ['Ratings', ['2+', '3+', '4+', '5+']],
]

export default function FilterPanel() {
  return (
    <div className="bg-white text-black">
      <h1 className="mb-4 text-4xl font-bold">Your Preferences</h1>
      {FILTERS.map((filter, idx) => (
        <FilterCategory
          key={idx}
          title={filter[0] as string}
          options={filter[1] as string[]}
        />
      ))}
    </div>
  )
}
