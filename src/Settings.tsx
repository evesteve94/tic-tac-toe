import React from 'react'


interface SettingsProps {
    winLength: number,
    setWinLength: React.Dispatch<React.SetStateAction<number>>,
    gameStarted: boolean,
    size: number,
  }

const Settings: React.FC<SettingsProps> = ({winLength, setWinLength, gameStarted, size}) => {
  return (
    <div className='settings'>
    <button disabled={gameStarted} onClick={() => 
      setWinLength(winLength !== 3 ? winLength - 1 : winLength)}>-</button>
    <p><span style={{fontWeight: "bold"}}>{winLength}</span> in a row to win</p>
    <button disabled={gameStarted} onClick={() => 
      setWinLength(winLength !== size ? winLength + 1 : winLength)}>+</button>
  </div>
  )
};

export default Settings