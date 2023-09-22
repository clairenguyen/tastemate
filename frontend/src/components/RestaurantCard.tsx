import Image from 'next/image'
import type { Restaurant } from '@/types'
import React from 'react'

interface IRestaurantCard {
  restaurant: Restaurant
  onAcceptButtonClick?: () => void
  onDeclineButtonClick?: () => void
}

export default function RestaurantCard({
  onAcceptButtonClick,
  onDeclineButtonClick,
  restaurant,
}: IRestaurantCard) {
  const { name, address, cuisine, rating, phone, image_url, website_url } =
    restaurant

  const maybeRenderButtons = () => {
    return onAcceptButtonClick && onDeclineButtonClick ? (
      <div className="flex gap-4">
        <button onClick={onAcceptButtonClick}>Accept</button>
        <button onClick={onDeclineButtonClick}>Decline</button>
      </div>
    ) : (
      ''
    )
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow max-w-md flex-col items-center"
        style={{ color: 'black', display: 'flex' }}
      >
        <div className="px-4 py-5 sm:px-6">
          <h1>{name}</h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <p>{website_url}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{cuisine}</p>
          <p>{rating}</p>
          <div className="h-48 w-96">
            <Image
              className="object-cover h-48 w-72"
              src={image_url}
              alt={`Image of ${name}`}
              width={50}
              height={50}
            />
          </div>
          {maybeRenderButtons()}
        </div>
      </div>
    </div>
  )
}
