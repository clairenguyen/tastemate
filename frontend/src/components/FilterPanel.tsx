import FilterButton from "./FilterButton";

const DIETARY_RESTRICTIONS = [
  "Vegan",
  "Vegetarian",
  "Gluten Free",
  "Kosher",
]

const CUISINES = [
  "American",
  "Italian",
  "Fast Food",
  "Pizza",
  "Mexican",
  "Asian",
  "Tacos",
  "Mediterranean",
  "Sushi",
]

const BUDGETS = [
  "$",
  "$$",
  "$$$",
  "$$$$",
]

const RATINGS = [
  "2+",
  "3+",
  "4+",
  "5+",
]

export default function FilterPanel() {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-row flex-wrap">
        {DIETARY_RESTRICTIONS.map((restriction) => (
          <FilterButton key={restriction} filterLabel={restriction}/>
        ))}
      </div>
      <div className="flex flex-row flex-wrap">
        {CUISINES.map((cuisine) => (
          <FilterButton key={cuisine} filterLabel={cuisine}/>
        ))}
      </div>
      <div className="flex flex-row flex-wrap">
        {BUDGETS.map((budget) => (
          <FilterButton key={budget} filterLabel={budget}/>
        ))}
      </div>
      <div className="flex flex-row flex-wrap">
        {RATINGS.map((rating) => (
          <FilterButton key={rating} filterLabel={rating}/>
        ))}
      </div>
    </div>
  )
}
