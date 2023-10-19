'use client'
import LikeList from '@/components/LikeList'
import CardScreen from '@/components/CardScreen'
import FilterPanel from '@/components/FilterPanel'
import { useState } from 'react'
import { Restaurant } from '@/types'

export default function Home() {
  const [likedRestaurants, setLikedRestaurants] = useState<Restaurant[]>([])

  function addLikedRestaurant(restaurant) {
    setLikedRestaurants([...likedRestaurants, restaurant])
  }

  return (
    <main>
      <div className="flex">
        <LikeList likedRestaurants={likedRestaurants} />
        <CardScreen addLikedRestaurant={addLikedRestaurant} />
        <FilterPanel />
      </div>
    </main>
  )
}
