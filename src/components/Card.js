import React from 'react';
import Quote from './Quote.js';
import Images from './Images.js';
import CardHeader from './CardHeader.js';
import Summary from './Summary.js';

const Card = (props) => (
  <div className="card">
    <CardHeader
      impression={props.impression}
      movie={props.movie}
    />
    <Quote
      quote={props.quote}
      movie={props.movie}
      release_date={props.release_date}
    />
    <Summary
      overview={props.overview}
    />
    <Images 
      impression_photo={props.impression_photo}
      poster={props.poster}
    />
  </div>
);

export default Card;