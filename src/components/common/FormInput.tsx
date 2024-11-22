import { FormInputProps } from '../../types/types';
import './FormInput.css';

export function FormInput({ value, onChange, placeholder }: FormInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="formInput"
    />
  );
}