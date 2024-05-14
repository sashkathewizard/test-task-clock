import React from 'react';
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import classes from './index.module.css';
import PrimaryText from "../../components/texts/primary-text/PrimaryText";

const Main = () => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded ${classes.mainDiv}`}>
      <PrimaryText value={'Main page'}/>
      <PrimaryButton to={'/clock'} children={'Clock'}/>
    </div>
  );
};

export default Main;
