import { Banner } from '@/components/banner'
import { BottomBar } from '@/components/bottom-bar'
import { Footer } from '@/components/footer'
import { SearchBar } from '@/components/search-bar'

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="grid place-items-center flex-1">
        <div className="w-full px-4">
          <Banner />
          <SearchBar />
          <BottomBar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
