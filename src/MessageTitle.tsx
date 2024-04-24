import React from 'react';

interface MessageTitleProps {
  cellSymbol: string;
  winner: string | null;
  isGameOver: boolean;
}

const MessageTitle: React.FC<MessageTitleProps> = ({ cellSymbol, winner, isGameOver }) => {
  return (
    <h2 style={{ color: isGameOver ? (winner ? 'green' : 'blue') : 'black' }}>
      {isGameOver ? 
      (winner ? `Game Over! ${winner} Wins!` : "It's a Draw!") 
      : 
      `${cellSymbol === 'X' ? "X's Turn!" : "O's Turn!"}`}
    </h2>
  );
};

export default MessageTitle;
