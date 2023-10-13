"use client"
import LikeList from '@/components/LikeList'
import CardScreen from '@/components/CardScreen'
import {useState} from "react";
import {Restaurant} from "@/types";
import FilterPanel from '@/components/FilterPanel'

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
