import React, { useState, useEffect } from 'react';
import Card from './components/card';
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

  return (
    <div className='cardsContainer'>
      {cardsArr.map((char) => (
        <Card name={char.name} image={char.image} />
      ))}
    </div>
  );
};

export default App;
