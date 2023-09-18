export default function FilterButton({ filterLabel }: { filterLabel: string }) {
  return (
    <>
      <button id={filterLabel}>{filterLabel}</button>
    </>
  )
}