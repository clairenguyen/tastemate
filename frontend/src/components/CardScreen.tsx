'use client'

import React, {useEffect, useState} from 'react'
import type { Restaurant } from '@/types'
import RestaurantCard from "@/components/RestaurantCard";

export const CardScreen = () => {
  const [error, setError] = useState()
  const [restaurants, setRestaurants] = useState<Restaurant[]>()
  const [dummyStatus, setDummyStatus] = useState<string>('none')

  const handleButtonClick = (buttonType: string) => {
    setDummyStatus(`${buttonType} button clicked`)
  }

  useEffect(() => {
    fetch('http://localhost:4000/api/restaurants/all')
        .then((response) => response.json())
        .then((response) => setRestaurants(response.data))
        .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>{error}</p>
  if (!restaurants) return <p>Loading...</p>

  return (
      <div>
            <>
              <h1 style={{background: "white", color: "black"}}>Button status: {dummyStatus}</h1>
                <RestaurantCard
                  restaurant={restaurants[0]}
                  onAcceptButtonClick={() => handleButtonClick('accept')}
                  onDeclineButtonClick={() => handleButtonClick('decline')}
                />
            </>
      </div>
  )
}
