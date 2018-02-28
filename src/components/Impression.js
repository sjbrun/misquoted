import React from 'react';
import RadioButton from './RadioButton.js';

const Impression = (props) => (
  <div>
    <div>
      <p className="impression__difficulty">Choose impression difficulty:</p>
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
    <div>
      <img className="image-center" src={props.impression_photo}/>
    </div>
  </div>
);

export default Impression;