import MatchList from '@/components/MatchList'
import CardScreen from '@/components/CardScreen'

export default function Home() {
  return (
    <main>
      <div className="flex">
        <MatchList />
        <CardScreen />
      </div>
    </main>
  )
}
