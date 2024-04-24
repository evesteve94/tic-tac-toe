import { useState, useEffect } from 'react';
import Cell from './Cell';
import MessageTitle from './MessageTitle';
import Settings from './Settings';

interface BoardProps {
  size: number; //storleken (3x3, 5x5, 7x7)
}

const Board = ({ size } : BoardProps) => {
  // börjar som tomma rutor av null - blir string x || o efter klick
  const [cells, setCells] = useState<Array<string | null>>(Array(size * size).fill(null));
  //togglar mellan värde x & o
  const [cellSymbol, setCellSymbol] = useState<string>('X');
  //boolean för om spelet är slut
  const [isGameOver, setIsGameOver] = useState(false);
  // vinnare == null || string (x eller o)
  const [winner, setWinner] = useState<string | null>(null);
  //antal i rad för att vinna (default brädans storlek)
  //aldrig: > 3 || < size (se Settings.tsx)
  const [winLength, setWinLength] = useState<number>(size);
  //undersöker om spelet börjat - låser settings ? true
  const [gameStarted, setGameStarted] = useState(false);

  //undersöker vinnare efter varje ändring på brädans rutor
  useEffect(() => {
    checkWinner();
  }, [cells, isGameOver]); 

  
  //undersöker varje möjlig vinnande kombo
  const checkWinner = () => {
    //array av vinnande kombos
    const winningCombinations: number[][] = [];
  
    /*
    genererar vinnande kombos för rader
    baserat på size och winlength (som går att ändra)
    */
    for (let i = 0; i < size; i++) {
      for (let j = 0; j <= size - winLength; j++) {
        const rowCombination: number[] = [];
        for (let k = 0; k < winLength; k++) {
          rowCombination.push(i * size + j + k);
        }
        winningCombinations.push(rowCombination);
      }
    }
  
    //  genererar vinnande kombos för kolumner
    for (let i = 0; i <= size - winLength; i++) {
      for (let j = 0; j < size; j++) {
        const colCombination: number[] = [];
        for (let k = 0; k < winLength; k++) {
          colCombination.push((i + k) * size + j);
        }
        winningCombinations.push(colCombination);
      }
    }
  
    //  genererar vinnande kombos för diagonal /
    for (let i = 0; i <= size - winLength; i++) {
      for (let j = 0; j <= size - winLength; j++) {
        const diagonalCombination1: number[] = [];
        for (let k = 0; k < winLength; k++) {
          diagonalCombination1.push((i + k) * size + (j + k));
        }
        winningCombinations.push(diagonalCombination1);
      }
    }
    
    //  genererar vinnande kombos för diagonal \
    for (let i = 0; i <= size - winLength; i++) {
      for (let j = winLength - 1; j < size; j++) {
        const diagonalCombination2: number[] = [];
        for (let k = 0; k < winLength; k++) {
          diagonalCombination2.push((i + k) * size + (j - k));
        }
        winningCombinations.push(diagonalCombination2);
      }
    }
  
    for (const combination of winningCombinations) {
      const symbols = combination.map(index => cells[index]);
      const symbolSet = new Set(symbols);
      if (symbolSet.size === 1 && symbols[0] !== null) {
        setWinner(symbols[0]); // uppdaterar vinnare
        setIsGameOver(true); // uppdaterar gameOver
        return;
      }
    }
  
    // om alla rutor är fyllda utan vinnare - oavgjort
    if (!cells.includes(null)) {
      setWinner(null);
      setIsGameOver(true);
    }
  };
  

  //tar in varje rutan index
  const handleClick = (index: number) => {
    setCells(prevCells => {
      //undersöker att rutan inte är fylld
      if (!isGameOver && prevCells[index] === null) {
        const newCells = [...prevCells];
        //fyller den specifika rutan med x eller o
        newCells[index] = cellSymbol;
        //togglar symbolen
        setCellSymbol(cellSymbol === 'X' ? 'O' : 'X');
        if (!gameStarted) setGameStarted(true); 
        checkWinner();
        return newCells;
      } else {
        alert("The spot is taken!");
        return prevCells; 
      }
    });
  };
  
  return (
    <>
      <MessageTitle cellSymbol={cellSymbol} winner={winner} isGameOver={isGameOver} /> 

        <div className='board' style={{ gridTemplate: `repeat(${size}, ${size === 7 ? '45px' 
          : '70px'}) / repeat(${size}, ${size === 7 ? '45px' : '70px'})` }}>
          {cells.map((symbol, index) => (
            <Cell key={index} cellSymbol={symbol} onClick={() => handleClick(index)} />
          ))}
        </div>
      <Settings winLength={winLength} setWinLength={setWinLength} gameStarted={gameStarted} size={size} />

    </>
  );
  
};

export default Board;
