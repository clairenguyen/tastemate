'use client'
import { Restaurant } from '@/types'

interface LikeListProps {
  likedRestaurants: Restaurant[]
}

export default function LikeList({ likedRestaurants = [] }: LikeListProps) {
  return (
    <div
      data-testid="match-list"
      className="float-left font-sans w-1/4 h-screen bg-white d-inline-block"
    >
      <div className="flex items-center h-20 bg-blue-600">
        <div className="p-5">
          <h1 className="text-xl">TasteMate</h1>
        </div>
      </div>
      <div className="text-black">
        <div className="p-5">
          <a className="pr-2">
            <b>Restaurants</b>
          </a>
          <a>
            <b>People</b>
          </a>
        </div>
        <div>
          <ul>
            {likedRestaurants.map((restaurant) => (
              <li>{restaurant.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
