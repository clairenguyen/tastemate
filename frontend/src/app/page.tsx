import MatchList from '@/components/MatchList'
import CardScreen from '@/components/CardScreen'
import FilterPanel from '@/components/FilterPanel'

export default function Home() {
  return (
    <main>
      <div className="flex">
        <MatchList />
        <CardScreen />
        <FilterPanel />
      </div>
    </main>
  )
}
