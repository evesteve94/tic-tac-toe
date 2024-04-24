import React from 'react';

interface GameButtonsProps {
  startGame: (size: number) => void;
}

const GameButtons: React.FC<GameButtonsProps> = ({ startGame }) => {
  return (
    <div className='button-div'>
      <h2>Choose Board</h2>
      <button style={{margin: "1rem"}} onClick={() => startGame(3)}>
        <img src="./src/assets/3x3.png" alt="tic tac toe logo" />
      </button>
      <button style={{margin: "1rem"}} onClick={() => startGame(5)}>
        <img src="./src/assets/5x5.png" alt="tic tac toe logo" />
      </button>
      <button style={{margin: "1rem"}} onClick={() => startGame(7)}>
        <img src="./src/assets/7x7.png" alt="tic tac toe logo" />
      </button>
    </div>
  );
}

export default GameButtons;
