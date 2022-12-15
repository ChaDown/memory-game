import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <img className='cardImg' src={props.image} alt={props.name}></img>
      <div className='cardTitle'>{props.name}</div>
    </div>
  );
};

export default Card;
