import type { Restaurant } from '@/types'

interface IRestaurantCard {
  restaurant: Restaurant
  onAcceptButtonClick?: () => void
  onDeclineButtonClick?: () => void
}

export default function RestaurantCard({ onAcceptButtonClick, onDeclineButtonClick, restaurant }: IRestaurantCard) {
  const {
    name,
    address,
    cuisine,
    rating,
    phone,
    image_url,
    website_url
  } = restaurant

  const maybeRenderButtons = () => {
    return onAcceptButtonClick && onDeclineButtonClick ? (
      <div className="flex gap-4">
        <button onClick={onAcceptButtonClick}>Accept</button>
        <button onClick={onDeclineButtonClick}>Decline</button>
      </div>
    ) : ""
  }

  return (
    <div className="flex flex-col items-center justify-around border border-slate-950 h-2/3 w-2/5">
      <h1>{name}</h1>
      <p>{address}</p>
      <p>{cuisine}</p>
      <p>{rating}</p>
      <p>{phone}</p>
      <p>{image_url}</p>
      <p>{website_url}</p>
      {maybeRenderButtons()}
    </div>
  )
}
