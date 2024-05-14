import React from 'react';
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import classes from './index.module.css';

const Main = () => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded ${classes.mainDiv}`}>
      <h1 className='text-7xl'>Main Page</h1>
      <PrimaryButton to={'/clock'} children={'Clock'}/>
    </div>
  );
};

export default Main;
