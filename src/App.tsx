import './App.css'
import CardsContainer from './components/cards/CardsContainer'
import Header from './components/Header'

function App() {
  return (
    <main className="dark min-h-screen rounded w-4xl bg-[#212121] flex flex-col">
      <Header />
      <CardsContainer />
      {/** Placeholder element to see how flex will grow */}
      <footer className='grow-1 border-2 border-red-500'></footer>
    </main>
  )
}

export default App
