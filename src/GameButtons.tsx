import React from 'react';
import x3Image from './assets/3x3.png';
import x5Image from './assets/5x5.png';
import x7Image from './assets/7x7.png';

interface GameButtonsProps {
  startGame: (size: number) => void;
}

const GameButtons: React.FC<GameButtonsProps> = ({ startGame }) => {
  return (
    <div className='button-div'>
      <h2>Choose Board</h2>
      <button style={{margin: "1rem"}} onClick={() => startGame(3)}>
        <img src={x3Image} alt="tic tac toe logo" />
      </button>
      <button style={{margin: "1rem"}} onClick={() => startGame(5)}>
        <img src={x5Image} alt="tic tac toe logo" />
      </button>
      <button style={{margin: "1rem"}} onClick={() => startGame(7)}>
        <img src={x7Image} alt="tic tac toe logo" />
      </button>
    </div>
  );
}

export default GameButtons;
