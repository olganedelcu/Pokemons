import { useState, useEffect } from "react";
import { SimplePokemon, PokemonBasicDetails } from "../types/types";

interface UsePokemonDataReturn {
  pokemon: SimplePokemon[];
  selectedPokemon: PokemonBasicDetails | null;
  isLoading: boolean;
  error: string | null;
  handlePokemonSelect: (pokemon: SimplePokemon) => Promise<void>;
}

export function usePokemonData(
  offset: number,
  searchTerm: string
): UsePokemonDataReturn {
  const [pokemon, setPokemon] = useState<SimplePokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonBasicDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`
        );
        const data = await response.json();
        const filteredResults = searchTerm
          ? data.results.filter((p: SimplePokemon) =>
              p.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : data.results;

        setPokemon(filteredResults);
      } catch (error) {
        setError("Failed to load Pokemon. Try again...");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [offset, searchTerm]);

  const handlePokemonSelect = async (pokemon: SimplePokemon) => {
    try {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching pokemon details:", error);
      setError("Failed to load Pokemon details...");
    }
  };

  return {
    pokemon,
    selectedPokemon,
    isLoading,
    error,
    handlePokemonSelect,
  };
}
