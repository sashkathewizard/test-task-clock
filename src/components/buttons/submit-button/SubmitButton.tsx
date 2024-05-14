import React from 'react';
import classes from './index.module.css';

interface Props {
  onClick: () => void;
  text: string;
}

const SubmitButton: React.FC<Props> = ({onClick, text}) => {

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
