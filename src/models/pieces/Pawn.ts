import {Piece} from "./Piece";
import {CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import {Square} from "../Square";

export interface Pawn extends Piece {}

export function newPawn(colour: Colours): Pawn {
    let has_moved = false;

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour === colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        // assign the direction of movement
        let direction = 1;

        if (colour === Colours.WHITE)
            direction = -1;

        if (dx === 0 && end_piece == null) {
            return dy === direction || (!has_moved
                && board[start.y + direction][start.x] != null
                && dy === 2 * direction);
        } else if (Math.abs(dx) === 1 && end_piece != null) {
            return dy === direction && end_piece.colour !== colour;
        }

        return false;
    }

    return {
        colour: colour,
        piece: Pieces.PAWN,
        canMove: canMove,
        moved: false,

        // implemented from Piece
        killed: false,
        highlighted: false,
    };
}
