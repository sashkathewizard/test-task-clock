import React from 'react';
import classes from './index.module.css'

interface Props {
  message: string;
}

const Error: React.FC<Props> = ({message}) => {
  return (
    <div className={`${classes.errorBlock} ${message ? classes.visible : ''}`}>
      {message}
    </div>
  );
};

export default Error;
