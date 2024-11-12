import React, { useEffect, useState } from 'react';
import PokemonName from './PokemonName.tsx';
import PokemonSprite from './PokemonSprite.tsx';
import { pokemonData } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<pokemonData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <PokemonName name = {data?.name || ''} />
      <PokemonSprite name = {data?.name || ''} sprite = {data?.sprites.front_default || ''} />
    </div>
  );
};

export default App;
