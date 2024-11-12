import { useState } from 'react'
import './App.css'
//import PokemonPhoto from './components/PokemonPhoto.tsx'
import PokemonWrapper from './components/PokemonWrapper.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonWrapper/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
