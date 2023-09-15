'use client'

import React, { useEffect, useState } from 'react'
import RestaurantCard from '@/components/RestaurantCard'
import { Restaurant } from '@/types'

interface RestaurantProps {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div style={{display: "flex"}}>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow max-w-md flex-col items-center" style={{color: "black", display: "flex"}}>
          <div className="px-4 py-5 sm:px-6">
              <a href={restaurant.website_url}>{restaurant.name}</a>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p>{restaurant.address}</p>
            <p>{restaurant.phone}</p>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.rating}</p>
            <div className="h-48 w-96">
              <img className="object-cover h-48 w-72" src={restaurant.image_url} />
            </div>
          </div>
      </div>
  </div>
  )
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
