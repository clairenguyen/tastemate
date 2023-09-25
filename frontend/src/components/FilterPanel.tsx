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
    <>
      <div>
        {DIETARY_RESTRICTIONS.map((restriction) => (
          <FilterButton key={restriction} filterLabel={restriction}/>
        ))}
      </div>
      <div>
        {CUISINES.map((cuisine) => (
          <FilterButton key={cuisine} filterLabel={cuisine}/>
        ))}
      </div>
      <div>
        {BUDGETS.map((budget) => (
          <FilterButton key={budget} filterLabel={budget}/>
        ))}
      </div>
      <div>
        {RATINGS.map((rating) => (
          <FilterButton key={rating} filterLabel={rating}/>
        ))}
      </div>
    </>
  )
}