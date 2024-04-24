// import './style.css'
import Board from './Board'
import GameButtons from './GameButtons';
import { useState, useEffect } from 'react'

function App() {
  //om spelet har börjat rederas board
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(3); // 3x3 som default storlek

  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();

  const startGame = (size: number) => {
    setBoardSize(size);
    setIsGameStarted(true);
  };
  
  useEffect(() => {
    console.log(boardSize);
  }, [boardSize]);
  

  const restartGame = () => {
    setIsGameStarted(false);
  }

  return (
    <div className="App">
      <header>
        <img src="./src/assets/logo.png" alt="tic tac toe logo" />
        <h1>TicTacToe</h1>
        <img src="./src/assets/logo.png" alt="tic tac toe logo" />
      </header>
      <main>
        {!isGameStarted ?
          <GameButtons startGame={startGame} />
          :
          <>
            <Board size={boardSize} />
            <button onClick={restartGame} style={{marginTop: "1rem"}}>Restart Game</button>
          </>
        }
      </main>
      <footer>
        &copy;evesteve {currentYear}
      </footer>
    </div>
  )
}

export default App
