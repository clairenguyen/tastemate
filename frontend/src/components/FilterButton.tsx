interface FilterButtonProps {
  label: string
}

export default function FilterButton({ label }: FilterButtonProps) {
  return (
    <>
      <button
        className="text-white bg-blue-600 border rounded-full p-2"
        id={label}
      >
        {label}
      </button>
    </>
  )
}
