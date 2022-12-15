import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='title'>
        <div className='titleText'>The Harry Potter Memory Game</div>
        <div className='description'>
          It's simple. Don't click the same card twice! Highest possible score
          is 12. Can you reach it?
        </div>
      </div>
      <div className='scoreboard'>
        <div className='score'>Score {props.score}</div>
        <div className='highScore'>Highscore {props.highScore}</div>
      </div>
    </div>
  );
};

export default Header;
