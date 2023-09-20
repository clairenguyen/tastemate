'use client'

import React, { useEffect, useState } from 'react'
import RestaurantCard from '@/components/RestaurantCard'
import { Restaurant } from '@/types'

interface RestaurantProps {
  params : {
    restaurant: Restaurant
  }
}

const RestaurantPage: React.FC<RestaurantProps> = () => {
  const [error, setError] = useState()
  const [restaurants, setRestaurants] = useState<Restaurant[]>()

  useEffect(() => {
    fetch('http://localhost:4000/api/restaurants/all')
      .then((res) => res.json())
      .then((res) => setRestaurants(res.data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>{error}</p>
  if (!restaurants) return <p>Loading...</p>

  return (
    <div>
      {restaurants.map((restaurant: Restaurant, key: number) => (
        <RestaurantCard restaurant={restaurant} key={key} />
      ))}
    </div>
  )
}

export default RestaurantPage
