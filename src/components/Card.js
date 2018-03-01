import React from 'react';
import Quote from './Quote.js';
import Movie from './Movie.js';
import Impression from './Impression.js';
import CardHeader from './CardHeader.js';

const Card = (props) => (
  <div>
    <CardHeader
      impression={props.impression}
      movie={props.movie}
    />
    <Quote
      quote={props.quote}
      movie={props.movie}
      release_date={props.release_date}
    />
    <div className="box">
      <div className="sub-box">
        <Impression 
          impression={props.impression}
          impression_photo={props.impression_photo}
          selectedDifficulty={props.selectedDifficulty}
          handleChangeDifficulty={props.handleChangeDifficulty}
        />
      </div>
      <div className="sub-box">

        <Movie
          movie={props.movie}
          release_date={props.release_date}
          poster={props.poster}
          overview={props.overview}
        />
      </div>
    </div>
  </div>
);

export default Card;