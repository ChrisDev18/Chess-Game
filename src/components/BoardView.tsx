import './BoardView-style.css';
import {Game} from "../models/Game";
import React from "react";
import SquareView from "./SquareView";

// React Component for a chessboard
export default function BoardView({gameState}: {gameState: [Game, any]}) {
    const [game,_] = gameState;
    const grid = game.board.board.map((row)=>
        row.map((square)=>
            <SquareView square={square} gameState={gameState}/>
        )
    );

    return (
        <div className="ChessBoard">
            {grid}
        </div>
    );
}