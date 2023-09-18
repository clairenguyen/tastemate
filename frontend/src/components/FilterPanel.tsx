import FilterButton from "./FilterButton";

const DIETARY_RESTRICTIONS = [
  "Vegan"
]

export default function FilterPanel() {
  return (
    <>
      {DIETARY_RESTRICTIONS.map((restriction) => (
        <FilterButton key={restriction} filterLabel={restriction}/>
      ))}
    </>
  )
}