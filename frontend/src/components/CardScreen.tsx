'use client'

import { useState } from 'react'
import type { Restaurant } from '@/types'
import RestaurantCard from '@/components/RestaurantCard'

const DUMMY_RESTAURANT: Restaurant = {
  name: 'Dummy Restaurant',
  address: '123 Fake St.',
  cuisine: 'Fakish',
  rating: 4.5,
  phone: "2130001111",
  image_url: "www.dummyrestaurant.com/pic",
  website_url: "www.dummyrestaurant.com"
}

export default function CardScreen() {
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant>(DUMMY_RESTAURANT)
  const [dummyStatus, setDummyStatus] = useState<string>('none')

  const handleButtonClick = (buttonType: string) => {
    setDummyStatus(`${buttonType} button clicked`)
  }

  return (
    <div className="flex flex-col items-center justify-center position-relative float-right w-3/4 h-screen bg-slate-200 d-inline-block text-black">
      <h1>Button status: {dummyStatus}</h1>
      <RestaurantCard
        onAcceptButtonClick={() => handleButtonClick('accept')}
        onDeclineButtonClick={() => handleButtonClick('decline')}
        restaurant={DUMMY_RESTAURANT}
      />
    </div>
  )
}
