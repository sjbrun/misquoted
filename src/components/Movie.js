import React from 'react';

const Movie = (props) => (
  <div>
    <p>{props.overview}</p>
    <img className="image-center" src={props.poster}/>
  </div>
);

export default Movie;