import './BoardView-style.css';
import {Game} from "../models/Game";
import React, {useState} from "react";
import SquareView from "./SquareView";
import {Colours} from "../models/enums";

// React Component for a chessboard
export default function BoardView({gameState}: {gameState: [Game, any]}) {
    const [game,_] = gameState;
    const selectedState = useState<number|null>(null)
    const grid = game.board.board.map((row, i)=>
        row.map((square, j)=>
            <SquareView square={square} gameState={gameState} radioState={selectedState} i={parseInt(""+i+j)}/>
        )
    );

    return (
        <div className={"ChessBoard" + (game.current_player.colour != Colours.WHITE ? " Rotated" : "")}>
            {grid}
        </div>
    );
}