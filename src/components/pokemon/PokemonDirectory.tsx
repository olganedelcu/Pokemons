import { useState } from 'react';
import { Header } from '../layout/Header';
import { PokemonList } from './PokemonList';
import { PokemonCard } from './PokemonCard';
import { usePokemonData } from '../../hooks/usePokemonData';
import './styles/PokemonDirectory.css';

export function PokemonDirectory() {
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  const {
    pokemon,
    selectedPokemon,
    isLoading,
    error,
    handlePokemonSelect
  } = usePokemonData(offset, searchTerm);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="pokemonDirectory">
      <Header onSearch={setSearchTerm} />
      <div className="pokemonDirectory__content">
        <PokemonList
          pokemon={pokemon}
          selectedPokemon={selectedPokemon?.name || null}
          onSelect={handlePokemonSelect}
        />
        {selectedPokemon && (
          <PokemonCard pokemon={selectedPokemon} />
        )}
      </div>
      <div className="pokemonDirectory__pagination">
        <button
          onClick={() => setOffset(Math.max(0, offset - 5))}
          disabled={offset === 0 || isLoading}
          aria-label="Previous page"
        >
          &lt;
        </button>
        <button
          onClick={() => setOffset(offset + 5)}
          disabled={isLoading}
          aria-label="Next page"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}