import './BoardView-style.css';
import Game from "../models/Game";
import React from "react";
import SquareView from "./SquareView";

// React Component for a chessboard
export default function BoardView({gameState}: {gameState: [Game, any]}) {
    const [game, setGame] = gameState;
    const grid = game.board.board.map((row, i)=>
        row.map((square, j)=>
            <SquareView square={square} gameState={gameState}/>
        )
    );

    return (
        <div className="ChessBoard">
            {grid}
        </div>
    );
}