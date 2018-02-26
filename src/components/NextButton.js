import React from 'react';

const NextButton = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.update}
    >
      Next Card
    </button>
  </div>
);

export default NextButton;