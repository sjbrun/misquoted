import React from 'react';

const Impression = (props) => (
  <div>
    <h3 className="impression__title">{props.impression}</h3>
    <img className="image-center" src={props.impression_photo}/>
  </div>
);

export default Impression;