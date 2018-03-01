import React from 'react';

const RadioButton = (props) => (
  <div className="radio-container">
    <label>
      {props.difficulty}
      <input 
        type="radio"
        value={props.difficulty} 
        checked={props.selectedDifficulty === props.difficulty} 
        onChange={props.handleChangeDifficulty}
      />
      <span className="radio"></span>    
    </label>
  </div>
);

export default RadioButton;