import React from 'react';

const Impression = (props) => (
  <div>
    <div>
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="easy" 
                          checked={props.selectedDifficulty === 'easy'} 
                          onChange={props.handleChangeDifficulty} />
            Easy
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="medium" 
                          checked={props.selectedDifficulty === 'medium'} 
                          onChange={props.handleChangeDifficulty} />
            Medium
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="difficult" 
                          checked={props.selectedDifficulty === 'difficult'} 
                          onChange={props.handleChangeDifficulty} />
            Difficult
          </label>
        </div>
      </form>
    </div>
    <div>
      <h3 className="impression__title">{props.impression}</h3>
      <img className="image-center" src={props.impression_photo}/>
    </div>
  </div>
);

export default Impression;