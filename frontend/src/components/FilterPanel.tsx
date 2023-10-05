import FilterButton from './FilterButton'

const DIETARY_RESTRICTIONS = ['Vegan', 'Vegetarian', 'Gluten Free', 'Kosher']

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

const BUDGETS = ['$', '$$', '$$$', '$$$$']

const RATINGS = ['2+', '3+', '4+', '5+']

export default function FilterPanel() {
  return (
    <div className="bg-white text-black">
      <h1 className="mb-4 text-4xl font-bold">Your Preferences</h1>
      <div className="mb-2 flex flex-col">
        <h2 className="text-2xl font-bold">Dietary Restrictions</h2>
        <div className="flex flex-row flex-wrap">
          {DIETARY_RESTRICTIONS.map((restriction) => (
            <FilterButton key={restriction} filterLabel={restriction} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-col">
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <div className="flex flex-row flex-wrap">
          {CUISINES.map((cuisine) => (
            <FilterButton key={cuisine} filterLabel={cuisine} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-col">
        <h2 className="text-2xl font-bold">Budget</h2>
        <div className="flex flex-row flex-wrap">
          {BUDGETS.map((budget) => (
            <FilterButton key={budget} filterLabel={budget} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-col">
        <h2 className="text-2xl font-bold">Ratings</h2>
        <div className="flex flex-row flex-wrap">
          {RATINGS.map((rating) => (
            <FilterButton key={rating} filterLabel={rating} />
          ))}
        </div>
      </div>
    </div>
  )
}
