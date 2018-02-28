import React from 'react';

const CardHeader = (props) => (
  <div className="card__header">
    <h3 className="impression__title">{props.impression}</h3>
    <h4>in</h4>
    <h3 className="movie__title">{props.movie}</h3>
  </div>
);

export default CardHeader;