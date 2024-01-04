import {Piece} from "./Piece";
import {CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import {Square} from "../Square";

export interface Knight extends Piece {}

export function newKnight(colour: Colours, parent: (Square | null) = null): Knight {

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour == colour) {
            return false;
        }

        let x = Math.abs(start.x - end.x);
        let y = Math.abs(start.y - end.y);
        console.log([x,y]);
        return (x * y == 2);
    }

    return {
        colour: colour,
        piece: Pieces.KNIGHT,
        canMove: canMove,

        // implemented from Piece
        parent: parent,
        killed: false,
        highlighted: false
    };

}