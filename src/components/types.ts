export interface pokemonData {
    name: string;
    sprites: Sprites;
    front_default: string;
}

export interface Sprites {
    front_default: string;
}

export interface PokeSpriteProp {
    name: string;
    sprite: string;
}

export interface PokeNameProp {
    name: string;
}

export interface PokemonWrapperProps {
    inputValue: string;
}