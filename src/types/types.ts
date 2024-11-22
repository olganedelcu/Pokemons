export interface SimplePokemon {
  name: string;
  url: string;
}

export interface PokemonBasicDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
// search input component
export interface FormInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}
// pokemon card component, ui
export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export interface SearchProps {
  onSearch: (term: string) => void;
}

// pokemon list components props
export interface PokemonListProps {
  pokemon: Pokemon[];
  isLoading: boolean;
  error: string | null;
}