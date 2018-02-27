import React from 'react';

const CardHeader = (props) => (
  <div className="card__header">
    <h3>
      {props.impression} in <span>{props.movie}</span>
    </h3>
  </div>
);

export default CardHeader;