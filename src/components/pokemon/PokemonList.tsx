import { SimplePokemon } from '../../types/types';
import { PokemonItem } from './PokemonItem';
import './styles/PokemonList.css';

interface PokemonListProps {
  pokemon: SimplePokemon[];
  selectedPokemon: string | null;
  onSelect: (pokemon: SimplePokemon) => void;
}

export function PokemonList({ pokemon, selectedPokemon, onSelect }: PokemonListProps) {
  return (
    <div id="pokemon-list" className="pokemonList">
      {pokemon.map((poke) => (
        <PokemonItem
          key={poke.name}
          pokemon={poke}
          isSelected={selectedPokemon === poke.name}
          onClick={() => onSelect(poke)}
        />
      ))}
    </div>
  );
}