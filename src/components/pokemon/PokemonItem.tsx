import { SimplePokemon } from '../../types/types';  
import './styles/PokemonItem.css';

interface PokemonItemProps {
  pokemon: SimplePokemon;  
  isSelected: boolean;
  onClick: () => void;
}
export function PokemonItem({ pokemon, isSelected, onClick }: PokemonItemProps) {
  return (
    <div 
      id="pokemon-item"
      className={`pokemonItem ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="pokemonItem__name">{pokemon.name}</span>
    </div>
  );
}