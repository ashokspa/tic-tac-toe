import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
export default function GameBoard({ onSelectSquare, turns }){

    let gameBorad = initialGameBoard;
    for(const turn of turns){
        console.log(turn);
        const { square, player } = turn;
        const { row, col } = square;
        gameBorad[row][col] = player;

    }

    return (

        <ol id="game-board">
            {gameBorad.map((row, rowIndex)=> (
            <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex)=> (
                    <li key={colIndex}>
                        <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={ playerSymbol !== null }>{playerSymbol}</button>
                    </li>
                ))}
                </ol>          
           </li>
        ))}
        </ol>
    )

}