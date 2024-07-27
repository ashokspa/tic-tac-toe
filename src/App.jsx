import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log  from "./components/Log";

function getDeriveActivePlayer(gameTurns){
  let currentPlayer  = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {  

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getDeriveActivePlayer(gameTurns);  

  function handlSelectSquare(rowIndex,colIndex){
      
      setGameTurns((prevTurns)=>{
          let currentPlayer = getDeriveActivePlayer(prevTurns);  
          const updatedTurns = [
            { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, 
            ...prevTurns
          ];
          return updatedTurns;
      });
  }

  return (

    <main>
        <div id="game-container">           
                <ol id="players" className="highlight-player">
                    <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} />
                    <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} />
                </ol>       
                <GameBoard onSelectSquare={handlSelectSquare} turns={gameTurns} />     
        </div>
        <Log turns={gameTurns} />
    </main>

  )
}

export default App
