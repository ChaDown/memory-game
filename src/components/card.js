import React from 'react';

const Card = (props) => {
  return (
    <div className='card' id={props.name} onClick={props.handleClick}>
      <img
        className='cardImg'
        id={props.name}
        src={props.image}
        alt={props.name}
      ></img>
      <div className='cardTitle' id={props.name}>
        {props.name}
      </div>
    </div>
  );
};

export default Card;
