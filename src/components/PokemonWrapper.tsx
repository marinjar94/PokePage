import React, { useEffect, useState } from 'react';
import PokemonName from './PokemonName.tsx';
import PokemonSprite from './PokemonSprite.tsx';
import { pokemonData, PokemonWrapperProps } from './types';

const PokemonWrapper: React.FC<PokemonWrapperProps> = ({ inputValue }) => {

  const [data, setData] = useState<pokemonData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+inputValue.toLowerCase())
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [inputValue]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Oops, no pokemon found with the name: {inputValue}. Try another name!</div>;

  return (
    <div>
      <PokemonName name = {data?.name || ''} />
      <PokemonSprite name = {data?.name || ''} sprite = {data?.sprites.front_default || ''} />
    </div>
  );
};

export default PokemonWrapper;
