import {Colours, Pieces} from "../enums";
import {CoordinatePair} from "../Move";
import {free_movement, Piece} from "./Piece";
import {Square} from "../Square";

export interface Queen extends Piece {}

export function newQueen(colour: Colours): Queen {

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour === colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        if ((dy === 0 && dx !== 0) || (dy !== 0 && dx === 0) || (dy === dx) || (dy === -dx)) {
            return free_movement(board, start, end);
        }

        return false;
    }

    return {
        colour: colour,
        piece: Pieces.QUEEN,
        canMove: canMove,

        // implemented from Piece
        killed: false,
        highlighted: false,
        moved: false
    };

}

