import FilterButton from './FilterButton'
import FilterCategory from './FilterCategory'

const filters = [
  {
    category: 'Dietary Restrictions',
    options: ['Vegan', 'Vegetarian', 'Gluten Free', 'Kosher'],
  },
  {
    category: 'Cuisines',
    options: [
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
  },
  { category: 'Budget', options: ['$', '$$', '$$$', '$$$$'] },
  { category: 'Ratings', options: ['2+', '3+', '4+', '5+'] },
]

export default function FilterPanel() {
  return (
    <div className="w-1/5 px-2 bg-white text-black">
      <h1 className="mb-4 text-4xl font-bold">Your Preferences</h1>
      {filters.map((filter, idx) => (
        <FilterCategory
          key={idx}
          title={filter.category}
          options={filter.options}
        />
      ))}
      <button className="mt-2 p-2 bg-blue-600 text-white rounded-full w-full">
        Submit
      </button>
      <button className="p-2 text-blue-600 text-center w-full">Reset</button>
    </div>
  )
}
