import React from 'react';

const CardHeader = (props) => (
  <div className="card__header">
    <div>
      <h3 className="impression__title">{props.impression}</h3>
    </div>
    <div>   
      <h4 className="in">in</h4>
    </div>
    <div>
      <h3 className="movie__title">{props.movie}</h3>
    </div>
  </div>
);

export default CardHeader;