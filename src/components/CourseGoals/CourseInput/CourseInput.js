import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0)
    {
      setIsValidInput(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0)
    {
      setIsValidInput(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValidInput ? 'red' : 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style = {{ borderColor: !isValidInput ? 'red' : 'black', backgroundColor: !isValidInput ? 'salmon' : 'transparent' }}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
