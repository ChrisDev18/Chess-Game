import React, {ChangeEvent} from "react";
import "./SquareView-style.css"
import {CoordinatePair, Move} from "../models/Move";
import {Square} from "../models/Square";
import {Game, switchPlayer} from "../models/Game";
import {Updater} from "use-immer";
import {move} from "../models/pieces/Piece";
import {Colours} from "../models/enums";

type args = {
    currentSquare: Square,
    gameState: [Game, Updater<Game>],
    currentCoordinates: CoordinatePair
}

// React Component for a square within a chessboard
export default function SquareView({currentSquare, gameState, currentCoordinates}: args) {
    const [game, setGame] = gameState;

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        // Get the target input element
        const target = e.target as HTMLInputElement;
        const [x, y] = target.value.split(',', 2).map(Number) as [number, number];
        const position: CoordinatePair = {x, y};

        // The interaction marks the beginning of a new move
        if (game.board.selected_piece === null && currentSquare.piece !== null)
            pickUpPiece(position);

        // The interaction marks the movement of a piece
        else if (
          game.board.selected_piece !== null
          && currentSquare.piece !== null
          && currentSquare.piece.highlighted
        )
            moveSelectedPiece(position);

        // Interacting to put down the current piece
        else if (game.board.selected_piece === position)
            putDownPiece();

        // Interacting to put down the current piece
        else
            pickUpPiece(position);

    }

    const pickUpPiece = (pickupFrom: CoordinatePair) => {
        console.log(`pickUpPiece @ ${pickupFrom.x} ${pickupFrom.y}`)

        if (currentSquare.piece === null) throw new Error();

        // // select the Piece just clicked
        setGame(draft => {
            draft.board.selected_piece = pickupFrom;
            console.log(`selected piece at position: ${pickupFrom.x} ${pickupFrom.y}`);
        });

        // find all possible moves
        let moves = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                // console.log(`Checking if ${square.piece.piece} can move to (${[i, j]})`);

                let end: CoordinatePair = {x: j, y: i,};

                if (currentSquare.piece.canMove(game.board.board, pickupFrom, end))
                    moves.push(end);

            }
        }

        clearHighlighted();

        if (moves.length === 0) setGame(draft => {
            draft.board.selected_piece = null
        });

        // highlight possible moves
        moves.forEach((end) => {
            // console.log(`Set square ${[end.x, end.y]} as highlighted`);
            setGame(draft => {
                draft.board.board[end.y][end.x].highlighted = true
            });
        });
    }

    const moveSelectedPiece = (moveTo: CoordinatePair) => {
        console.log(`moveSelectedPiece to ${moveTo.x} ${moveTo.y}`)
        if (game.board.selected_piece === null) throw new Error("Cannot move if no piece has been selected");

        const movement: Move = {
            start: game.board.selected_piece,
            end: currentCoordinates
        }

        let update = move(game, movement);
        update = switchPlayer(update);
        setGame(update);
        putDownPiece();
    }

    const putDownPiece = () => {
        clearHighlighted();
        setGame(draft => {
            draft.board.selected_piece = null
        });
    }

    const clearHighlighted = () => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                setGame(draft => {
                    draft.board.board[i][j].highlighted = false
                });
            }
        }
    }


    if (currentSquare.piece == null)
        return (
          <div className={"Square" + (currentSquare.highlighted ? " Highlighted" : "")}>
              <button className="visible"
                      onClick={() => moveSelectedPiece(currentCoordinates)}
                      disabled={!currentSquare.highlighted}
              />
          </div>
        );

    const name = `Piece=${currentSquare.piece.piece}, Colour=${currentSquare.piece.colour}.svg`;

    return (
      <div className={"Square" + (currentSquare.highlighted ? " Highlighted" : "")}>
          <label className="Piece">
              <img className={game.current_player.colour === Colours.BLACK ? "Rotated" : ""}
                   src={`${process.env.PUBLIC_URL}/pieces/${name}`}
                   alt={`${currentSquare.piece.colour} ${currentSquare.piece.piece}`}
              />

              <input type="radio"
                     onChange={handleSelect}
                     value={"" + currentCoordinates.x + "," + currentCoordinates.y}
                     checked={game.board.selected_piece === currentCoordinates}
                     disabled={game.current_player.colour !== currentSquare.piece.colour}
              />
          </label>
      </div>

    );

}
