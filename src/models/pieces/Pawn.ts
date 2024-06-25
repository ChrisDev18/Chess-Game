import {Piece} from "./Piece";
import {CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import {Square} from "../Square";

export interface Pawn extends Piece {}

export function newPawn(colour: Colours): Pawn {

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;
        let start_piece = board[start.y][start.x].piece;

        if (end_piece?.colour === colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        // assign the direction of movement
        let direction = colour === Colours.WHITE ? -1 : 1;

        // if moving forward
        if (dx === 0 && end_piece == null) {

            if (dy === direction) {
                return true;
            }

            if (dy === 2 * direction && !start_piece?.moved) {
                return true;
            }
        }

        // if moving sideways
        else if (Math.abs(dx) === 1 && end_piece != null) {
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
