interface PokeSpriteProp {
  name: string;
  sprite: string;
}

// Functional component that takes a 'name' prop
const PokemonSprite = ({ sprite, name }: PokeSpriteProp) => {
    return (
      <img
      className="pokemonSprite"
      src={sprite}
      alt={name + " Sprite"} 
    />
    );
  };
  

export default PokemonSprite;

  