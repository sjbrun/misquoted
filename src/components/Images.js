import React from 'react';
import tmdb_img from '../images/tmdb.png';

const Images = (props) => (
  <div className="box">
    <div className="sub-box">
      <img src={props.impression_photo}/>
    </div>
    <div className="sub-box">
      <img src={props.poster}/>
      <img src={tmdb_img} className="tmdb"/>
    </div>
  </div>
);

export default Images;