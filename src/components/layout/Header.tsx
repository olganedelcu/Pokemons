import { useState } from 'react';
import { SearchProps } from '../../types/types';
import { FormInput } from '../common/FormInput';
import './Header.css';

export function Header({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <header className="header">
      <h1>POKEMONS</h1>
      <FormInput
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search For A Pokemon..."
      />
    </header>
  );
}