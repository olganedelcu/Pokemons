export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SimplePokemon[];
}

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

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface FormInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export interface SearchProps {
  onSearch: (term: string) => void;
}

export interface PokemonListProps {
  pokemon: Pokemon[];
  isLoading: boolean;
  error: string | null;
}