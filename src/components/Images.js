import React from 'react';

const Images = (props) => (
  <div className="box">
    <div className="sub-box">
      <img src={props.impression_photo}/>
    </div>
    <div className="sub-box">
      <img src={props.poster}/>
    </div>
  </div>
);

export default Images;