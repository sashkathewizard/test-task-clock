import React from 'react';
import classes from './index.module.css'

interface Props {
  value: string;
}

const RegularText: React.FC<Props> = ({value}) => {
  return (
    <p className={classes.regularText}> {value} </p>
  );
};

export default RegularText;
