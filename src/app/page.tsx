import { Banner } from '@/components/banner'
import { BottomBar } from '@/components/bottom-bar'
import { SearchBar } from '@/components/search-bar'

export default function Home() {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div>
        <Banner />
        <SearchBar />
        <BottomBar />
      </div>
    </div>
  )
}
