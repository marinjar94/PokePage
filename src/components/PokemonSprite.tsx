import { PokeSpriteProp } from './types';

const PokemonSprite = ({ sprite, name }: PokeSpriteProp) => {
    return (
      <img
      className="pokemonSprite"
      src={sprite ? sprite : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DUEfivmCYTquWQZ_vo4fyd6bc8z6XvTgdA&s'}
      alt={name + " Sprite"} 
    />
    );
  };
  

export default PokemonSprite;

  