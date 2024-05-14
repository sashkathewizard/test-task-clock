import React from 'react';
import Clock from "react-clock";
import classes from './index.module.css';

interface Props {
  value: string;
}

const ClockComponent: React.FC<Props> = ({value}) => {

  const dateValue = new Date(`2000-01-01T${value}`);

  return (
    <div className={classes.clock}>
      <Clock value={dateValue}/>
    </div>
  );
};

export default ClockComponent;
