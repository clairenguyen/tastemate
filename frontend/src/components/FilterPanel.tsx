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
    </>
  )
}