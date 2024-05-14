import React from 'react';
import classes from './index.module.css';

const SubmitButton: React.FC<{ onClick: () => void; text: string; }> = ({onClick, text}) => {

  const handleClick = () => {
    onClick();
  }

  return (
    <button className={classes.submitButton} onClick={handleClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
