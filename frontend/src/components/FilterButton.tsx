export default function FilterButton({ filterLabel }: { filterLabel: string }) {
  return (
    <>
      <button
        className="text-white bg-blue-600 border rounded-full p-2"
        id={filterLabel}
      >
        {filterLabel}
      </button>
    </>
  )
}
