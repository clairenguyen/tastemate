'use client'

import { useEffect, useState } from 'react'

interface Restaurant {
  name: string
  address: string
  cuisine: string
  rating: string
  phone: string
  image_url: string
  website_url: string
}

interface RestaurantProps {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <>
      <h1>{restaurant.name}</h1>
      <div>{restaurant.address}</div>
      <div>{restaurant.cuisine}</div>
      <div>{restaurant.rating}</div>
      <div>{restaurant.phone}</div>
      <div>{restaurant.image_url}</div>
      <div>{restaurant.website_url}</div>
      <br />
    </>
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
