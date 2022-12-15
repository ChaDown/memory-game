import React, { useState, useEffect } from 'react';
import Card from './components/card';
import Header from './components/header';
import harry from './components/images/harry.jpg';
import hermione from './components/images/hermione.jpg';
import bellatrix from './components/images/bellatrix.jpg';
import ginny from './components/images/ginny.jpg';
import dumbledore from './components/images/dumbledore.jpg';
import luna from './components/images/luna.jpg';
import ron from './components/images/ron.jpg';
import snape from './components/images/snape.jpg';
import voldemort from './components/images/voldemort.jpg';
import malfoy from './components/images/malfoy.jpg';
import draco from './components/images/draco.jpg';
import hagrid from './components/images/hagrid.jpg';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [clickedArr, setClickedArr] = useState([]);

  const cardsArr = [
    { name: 'Harry', image: harry },
    { name: 'Hermione', image: hermione },
    { name: 'Bellatrix', image: bellatrix },
    { name: 'Ginny', image: ginny },
    { name: 'Dumbledore', image: dumbledore },
    { name: 'Luna', image: luna },
    { name: 'Ron', image: ron },
    { name: 'Snape', image: snape },
    { name: 'Voldemort', image: voldemort },
    { name: 'L. Malfoy', image: malfoy },
    { name: 'D. Malfoy', image: draco },
    { name: 'Hagrid', image: hagrid },
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(e) {
    const cardName = e.target.id;

    if (clickedArr.includes(cardName)) {
      setScore(0);
      setClickedArr([]);
    } else {
      setClickedArr([...clickedArr, cardName]);
      setScore(score + 1);
    }
  }

  // Setting highscore with useEffect, as it will render after the game, which is more accurate. This watches score and highScore, and if the condition is met renders.

  useEffect(() => {
    if (score > highScore) {
      setHighscore(score);
    }
  }, [score, highScore]);

  return (
    <div>
      <div className='gameBody'>
        <Header score={score} highScore={highScore} />
        <div className='cardsContainer'>
          {shuffleArray(cardsArr).map((char) => (
            <Card
              key={char.name}
              name={char.name}
              image={char.image}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
