import React from 'react';

const Quote = (props) => (
  <div className="quote">
    <blockquote className="blockquote">
      {props.quote}
      <cite>
        {props.movie} ({props.release_date})
      </cite>
    </blockquote>
  </div>
);

export default Quote;