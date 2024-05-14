import React from 'react';
import Clock from "react-clock";
import classes from './index.module.css';

const ClockComponent: React.FC<{ value: string }> = ({value}) => {

  const dateValue = new Date(`2000-01-01T${value}`);

  return (
    <div className={classes.clock}>
      <Clock value={dateValue}/>
    </div>
  );
};

export default ClockComponent;
