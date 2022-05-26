import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styledComponents from 'styled-components';
const FormControl = styledComponents.div`
  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color ${props=>(props.invalid?'red':'black')}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=>(props.invalid?'red':'#ccc')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
&.invalid label{
color:red

}
&.invalid input{
border-color: red;
background:#ffd7d7;

}`;
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;