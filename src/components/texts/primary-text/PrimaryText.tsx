import React from 'react';
import classes from './index.module.css';

interface Props {
  value: string;
}

const PrimaryText: React.FC<Props> = ({value}) => {
  return (
    <h1 className={classes.primaryText}>
      {value}
    </h1>
  );
};

export default PrimaryText;
