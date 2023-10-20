'use client'
import { useEffect, useState } from 'react'
import type { Restaurant } from '@/types'
import CardCarousel from '@/components/CardCarousel'

export default function CardScreen() {
  const [error, setError] = useState()
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isFilterCardOpen, setIsFilterCardOpen] = useState(false);

  const toggleFilterCard = () => {
    setIsFilterCardOpen(!isFilterCardOpen);
  };

  useEffect(() => {
    fetch('http://localhost:4000/api/restaurants/all')
      .then((response) => response.json())
      .then((response) => setRestaurants(response.data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>{error}</p>

  return (
    <div
      data-testid="card-screen"
      className="flex flex-col items-center justify-center position-relative float-right w-3/5 h-screen bg-slate-200 d-inline-block text-black"
    >
      <button onClick={toggleFilterCard}>Filter</button>
      {isFilterCardOpen && 'Filters'}

      <CardCarousel restaurants={restaurants} />

    </div>
  )
}
