import React,{ useState } from 'react'
import PokemonWrapper from './components/PokemonWrapper.tsx'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('pikachu');
  const [triggerValue, setTriggerValue] = useState<string>('pikachu');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
  };
  const handleButtonClick = () => { 
    setTriggerValue(inputValue); 
  };

  return (
    <>
      <PokemonWrapper inputValue = {triggerValue}/>
      <div className="card">
      <input className="PokeInput" type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Catch a Pokemon!</button>
      </div>
    </>
  )
}

export default App