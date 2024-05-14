import React, { useState } from 'react';
import Input from '../../components/input/Input';
import SubmitButton from "../../components/buttons/submit-button/SubmitButton";
import classes from "./index.module.css";
import 'react-clock/dist/Clock.css';
import ClockComponent from "../../components/clock/Clock";
import PrimaryText from "../../components/texts/primary-text/PrimaryText";
import Error from "../../components/error/Error";

const ClockPage = () => {
  const [value, setValue] = useState('21:15:37');
  const [changedValue, setChangedValue] = useState('21:15:37')
  const [errorMessage, setErrorMessage] = useState('');

  const handleApply = () => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    if (timeRegex.test(changedValue)) {
      setValue(changedValue);
      setErrorMessage('')
    } else {
      setErrorMessage('Некоректний формат години')
    }
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded ${classes.center}`}>
      <ClockComponent value={value}/>
      <PrimaryText value='Clock Page'/>
      <Input  value={changedValue} onInputChange={setChangedValue}/>
      <Error message={errorMessage}/>
      <SubmitButton onClick={handleApply} text={'Apply'}/>
    </div>
  );
};

export default ClockPage;
