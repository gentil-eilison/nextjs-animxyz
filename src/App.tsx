import './App.css'
import CardsContainer from './components/cards/CardsContainer'
import Header from './components/Header'
import { XyzTransition } from "@animxyz/react";

import MiniPlayer from './components/player/MiniPlayer'
import DiscoverSection from './components/discover/DiscoverSection'
import FeaturedArtist from './components/featured/FeaturedArtist'

function App() {
  return (
    <XyzTransition appear duration="auto">
      <main className="dark rounded bg-[#1F1F1F] flex flex-col grow-1 w-fit md:w-3xl">
        <Header />
        <CardsContainer />
        <FeaturedArtist />
        <DiscoverSection />
        <MiniPlayer />
      </main>
    </XyzTransition>
  )
}

export default App
