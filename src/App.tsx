import './App.css'
import CardsContainer from './components/cards/CardsContainer'
import Header from './components/Header'

import { XyzTransition } from "@animxyz/react";

function App() {
  return (
    <XyzTransition appear duration="auto">
      <main className="dark rounded bg-[#1F1F1F] flex flex-col grow-1 w-fit md:w-3xl">
        <Header />
        <CardsContainer />
        {/** Placeholder element to see how flex will grow */}
        <footer className='grow-1'>Dummy Text</footer>
      </main>
    </XyzTransition>
  )
}

export default App
