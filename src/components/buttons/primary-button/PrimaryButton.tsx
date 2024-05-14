import React from 'react';
import classes from './index.module.css';
import {useNavigate} from 'react-router-dom';

interface Props {
  onClick?: () => void;
  to: string;
  children: string;
}

const PrimaryButton: React.FC<Props> = ({onClick, to, children}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(to);
  }

  return (
    <button className={classes.primaryButton} onClick={handleClick}>
      { children }
    </button>
  );
};

export default PrimaryButton;
