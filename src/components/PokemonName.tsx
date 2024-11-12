import { PokeNameProp } from './types';

const PokeName = ({ name }: PokeNameProp) => {
    return (
      <div>
        <h1 className={name ? 'capitalizedText' : ''} >Hello, {name ? name : 'there. Please choose a Pokemon'}!</h1>
      </div>
    );
  };
  

export default PokeName;
