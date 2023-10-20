import FilterButton from './FilterButton'

interface FilterCategoryProps {
  title: string
  options: string[]
}

export default function FilterCategory({
  title,
  options,
}: FilterCategoryProps) {
  return (
    <div className="mb-2 flex flex-col">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-row flex-wrap">
        {options.map((restriction) => (
          <FilterButton key={restriction} label={restriction} />
        ))}
      </div>
    </div>
  )
}
