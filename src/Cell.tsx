type CellProps = {
    cellSymbol: string | null;
    onClick: () => void;
  };
  
  const Cell: React.FC<CellProps> = ({ cellSymbol, onClick }) => {
    const handleClick = () => {
      onClick(); 
    };
  
    return (
      <div className='cell' onClick={handleClick}>
        {cellSymbol}
      </div>
    );
  };
  
  export default Cell;
  