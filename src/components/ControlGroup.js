import React from 'react';
import NextButton from './NextButton.js';
import RadioButton from './RadioButton.js';

const ControlGroup = (props) => (
  <div className="whitebox">
    <div className="sub-whitebox info">
      <p>
        This game pairs a random famous person or character with a random famous
        movie quote. Try acting out the quote below in your best impression of the selected 
        person. Can your friends correctly guess the impression and the movie? Select the 
        difficulty and retrieve a new card below.
      </p>
    </div>
    <div className="box">
      <div className="sub-box right">
        <form>
          <RadioButton
            difficulty='easy'
            selectedDifficulty={props.selectedDifficulty}
            handleChangeDifficulty={props.handleChangeDifficulty}
          />
          <RadioButton
            difficulty='medium'
            selectedDifficulty={props.selectedDifficulty}
            handleChangeDifficulty={props.handleChangeDifficulty}
          />
          <RadioButton
            difficulty='difficult'
            selectedDifficulty={props.selectedDifficulty}
            handleChangeDifficulty={props.handleChangeDifficulty}
          />
        </form>
      </div>
      <div className="sub-box left">
        <NextButton 
          update={props.update}
        />
      </div>
    </div>
  </div>
);

export default ControlGroup;