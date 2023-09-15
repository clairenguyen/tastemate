import Image from 'next/image'
import MatchList from "@/components/MatchList";
import CardScreen from "@/components/CardScreen";

export default function Home() {
  return (
    <main >
        <div className="d-inline-block">
            <MatchList/>
            <CardScreen/>
        </div>

    </main>
  )
}
