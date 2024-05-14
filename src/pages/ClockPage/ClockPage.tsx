import React, { useState } from 'react';
import Input from '../../components/Input';
import SubmitButton from "../../components/buttons/submit-button/SubmitButton";
import classes from "./index.module.css";
import 'react-clock/dist/Clock.css';
import ClockComponent from "../../components/clock/Clock";

const ClockPage = () => {
  const [value, setValue] = useState('21:15:37');
  const [changedValue, setChangedValue] = useState('21:15:37')

  const handleApply = () => {
    setValue(changedValue);
  };

  const handleInputChange = (newValue: string) => {
    setChangedValue(newValue);
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded ${classes.center}`}>
      <ClockComponent value={value}/>
      <h1 className={'text-6xl'}>Clock Page</h1>
      <Input  value={changedValue} onInputChange={handleInputChange}/>
      <SubmitButton onClick={handleApply} text={'Apply'}/>
    </div>
  );
};

export default ClockPage;
