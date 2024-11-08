import { useState } from 'react'
import './App.css'
import PokemonPhoto from './components/PokemonPhoto.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <PokemonPhoto />
      </div>
      <h1>Pikachu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR yeaaah
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
