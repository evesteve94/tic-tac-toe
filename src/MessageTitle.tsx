interface MessageTitleProps {
  cellSymbol: string;
  winner: string | null;
  isGameOver: boolean;
}

const MessageTitle = ({ cellSymbol, winner, isGameOver } : MessageTitleProps) => {
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
