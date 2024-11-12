interface PokeNameProp {
  name: string;
}

// Functional component that takes a 'name' prop
const PokeName = ({ name }: PokeNameProp) => {
    return (
      <div>
        <h1 className="capitalizedText" >Hello, {name}!</h1>
      </div>
    );
  };
  

export default PokeName;
