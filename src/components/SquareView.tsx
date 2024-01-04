import PieceView from "./PieceView";
import React, {useState} from "react";
import "./SquareView-style.css"
import {CoordinatePair} from "../models/Move";
import {Square} from "../models/Square";
import {Game} from "../models/Game";

type args = {
    square: Square,
    gameState: [Game, any]
}

// React Component for a square within a chessboard
export default function SquareView({square, gameState}: args) {
    const [game, setGame] = gameState;

    function deselectAll() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                setGame((game: Game) => {
                    game.board.board[i][j].highlighted = false;
                });
            }
        }
    }

    function select() {

        // // select the current piece
        // setGame((game: Game) => {
        //     game.board.board[square.y][square.x].selected = true;
        // });

        // ensure no erroneous conditions
        if (square.piece == null || square.piece.parent == null) {
            throw new Error("Cannot check moves on a null piece " +
                "or a piece from off the board");
        }

        // find all possible moves
        let moves = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                // console.log(`Checking if ${square.piece.piece} can move to (${[i, j]})`);

                let start: CoordinatePair = {x: square.piece.parent.x, y: square.piece.parent.y,};
                let end: CoordinatePair = {x: j, y: i,};

                if (square.piece.canMove(game.board.board, start, end))
                    moves.push(end);

            }
        }

        deselectAll();

        // highlight possible moves
        moves.forEach((end) => {
            console.log(`Set square ${[end.x, end.y]} as highlighted`);
            setGame((game: Game) => {
                game.board.board[end.y][end.x].highlighted = true;
            });
        });
    }

    if (square.piece == null)
        return <div className={"Square" + (square.highlighted ? " Highlighted" : "")}></div>;

    return (
        <div className={"Square" + (square.highlighted ? " Highlighted" : "")}>
            <PieceView piece={square.piece.piece}
                       colour={square.piece.colour}
                       onClick={select}
            />
        </div>
    );

}
