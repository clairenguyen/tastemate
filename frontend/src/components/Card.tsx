import type { Restaurant } from '@/types'

interface ICard {
  onAcceptButtonClick: () => void
  onDeclineButtonClick: () => void
  restaurant: Restaurant
}

export default function Card({ onAcceptButtonClick, onDeclineButtonClick, restaurant }: ICard) {
  const { name } = restaurant

  return (
    <div className="flex flex-col items-center justify-around border border-slate-950 h-2/3 w-2/5">
      <h1>{name}</h1>
      <div className="flex gap-4">
        <button onClick={onAcceptButtonClick}>Accept</button>
        <button onClick={onDeclineButtonClick}>Decline</button>
      </div>
    </div>
  )
}
