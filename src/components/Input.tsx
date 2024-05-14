import React, { useState } from 'react';

const Input: React.FC<{ value: string; onInputChange: (newValue: string) => void }> = ({ value, onInputChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} className={'text-black'} />
    </div>
  );
};

export default Input;
