import {Colours, Pieces} from "../enums";
import {CoordinatePair} from "../Move";
import {free_movement, Piece} from "./Piece";
import {Square} from "../Square";

export interface Bishop extends Piece {}

export function newBishop(colour: Colours, parent: (Square | null) = null): Bishop {

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour === colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        if ((dy == dx) || (dy == -dx)) {
            return free_movement(board, start, end);
        }

        return false;
    }

    return {
        colour: colour,
        piece: Pieces.BISHOP,
        canMove: canMove,

        // implemented from Piece
        parent: parent,
        killed: false,
        highlighted: false
    };

}
