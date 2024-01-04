import {Colours, Pieces} from "../enums";
import {CoordinatePair} from "../Move";
import {Piece} from "./Piece";
import {Square} from "../Square";

export interface Bishop extends Piece {}

export function newBishop(colour: Colours, parent: (Square | null) = null): Bishop {

    // TODO: Bishop canMove()
    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
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

function free_movement(board: Square[][], start: number, end: number, y_displacement: boolean, other: number): boolean {
    let direction: number;
    if (start > end)
        direction = -1;
    else
        direction = 1;

    for (let i = 0; i <= Math.abs(start - end); i++) {
        if (y_displacement) {
            if (board[start + (i * direction)][other] != null)
                return false;
        } else {
            if (board[other][start + (i * direction)] != null)
                return false;
        }
    }

    return true;
}