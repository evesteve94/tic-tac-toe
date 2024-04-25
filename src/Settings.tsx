
interface SettingsProps {
    winLength: number,
    setWinLength: React.Dispatch<React.SetStateAction<number>>,
    gameStarted: boolean,
    size: number,
  }

  const Settings = ({winLength, setWinLength, gameStarted, size}: SettingsProps) => {
    return (
      <div className='settings'>
        <button disabled={gameStarted} onClick={() => 
          setWinLength(winLength !== 3 ? winLength - 1 : winLength)}>-</button>
        <p style={{ color: gameStarted ? 'darkred' : 'inherit' }}>
          <span style={{ fontWeight: "bold" }}>{winLength}</span> in a row to win
          {gameStarted && <span style={{ marginLeft: '5px' }}>🔒</span>}
        </p>
        <button disabled={gameStarted} onClick={() => 
          setWinLength(winLength !== size ? winLength + 1 : winLength)}>+</button>
      </div>
    );
  };
export default Settings