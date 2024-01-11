import {Colours, Pieces} from "../enums";
import {CoordinatePair} from "../Move";
import {Piece} from "./Piece";
import {Square} from "../Square";

export interface King extends Piece {}

export function newKing(colour: Colours, parent: (Square | null) = null): King {

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour === colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        return Math.round(Math.sqrt(dy**2 + dx**2)) == 1 && ! isCompromising(board, start, end);
    }

    return {
        colour: colour,
        piece: Pieces.KING,
        canMove: canMove,

        // implemented from Piece
        parent: parent,
        killed: false,
        highlighted: false,
        moved: false
    };
}

function isCompromising(board: Square[][], start: CoordinatePair, end: CoordinatePair) {
    // TODO: ensure that king cannot move to a place which will put player in checkmate
    return false;
}
