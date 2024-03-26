import './BoardView-style.css';
import {Game} from "../models/Game";
import React from "react";
import SquareView from "./SquareView";
import {Colours} from "../models/enums";
import {Updater} from "use-immer";

// React Component for a chessboard
export default function BoardView({gameState}: {gameState: [Game, Updater<Game>]}) {
    const [game] = gameState;
    const grid = game.board.board.map((row, i)=>
        row.map((square, j)=>
            <SquareView currentSquare={square} gameState={gameState} currentCoordinates={{x: j, y: i}}/>
        )
    );

    return (
        <div className={"ChessBoard" + (game.current_player.colour !== Colours.WHITE ? " Rotated" : "")}>
            {grid}
        </div>
    );
}