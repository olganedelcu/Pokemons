import { PokemonBasicDetails } from '../../types/types';
import './styles/PokemonCard.css';

interface PokemonCardProps {
  pokemon: PokemonBasicDetails;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div 
      id="pokemon-card"
      className="pokemonCard"
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemonCard__image"
      />
      <h2 className="pokemonCard__name">{pokemon.name}</h2>
      <div className="pokemonCard__types">
        {pokemon.types.map((t) => (
          <span 
            key={t.type.name}
            className="pokemonCard__type"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}