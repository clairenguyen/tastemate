import React from 'react'

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

interface GetRestaurantsResponse {
  data: Restaurant[]
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

const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch('http://localhost:4000/api/restaurants/all')

  if (!response.ok) {
    throw new Error('Failed to fetch restaurant data')
  }

  const restaurantData: GetRestaurantsResponse = await response.json()
  return restaurantData.data
}

const RestaurantPage: React.FC<RestaurantProps> = async () => {
  const restaurants: Restaurant[] = await getRestaurants()

  return (
    <div>
      {restaurants.map((restaurant, key) => (
        <RestaurantCard restaurant={restaurant} key={key} />
      ))}
    </div>
  )
}

export default RestaurantPage
