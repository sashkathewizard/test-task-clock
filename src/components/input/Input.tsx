import React from 'react';
import classes from './index.module.css';

interface Props {
  value: string;
  onInputChange: (newValue: string) => void;
}

const Input: React.FC<Props> = ({ value, onInputChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} className={`text-black ${classes.input}`} />
    </div>
  );
};

export default Input;
