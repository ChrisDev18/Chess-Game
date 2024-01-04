import {Colours, Pieces} from "../enums";
import {CoordinatePair} from "../Move";
import {Piece} from "./Piece";
import {Square} from "../Square";

// export class Rook_class extends Piece {
//     colour: Colours;
//     piece: Pieces;
//
//     constructor(colour: Colours, parent: (Square | null) = null) {
//         super(parent);
//         this.colour = colour;
//         this.piece = Pieces.ROOK;
//     }
//
//     canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean {
//         let end_piece = board[end.y][end.x].piece;
//
//         if (end_piece?.colour === this.colour)
//             return false;
//
//         let dy = end.y - start.y;
//         let dx = end.x - start.x;
//
//         if (dy == 0 && dx != 0) {
//             return Rook.free_movement(board, start.x, end.x, false, start.y);
//         }
//
//         else if (dy != 0 && dx == 0) {
//             return Rook.free_movement(board, start.y, end.y, true, start.x);
//         }
//
//         return false;
//     }
//
//     // checks that there are no pieces between the start and end of the move
//     private static free_movement(board: Square[][], start: number, end: number, y_displacement: boolean, other: number): boolean {
//         let direction: number;
//         if (start > end)
//             direction = -1;
//         else
//             direction = 1;
//
//         for (let i = 0; i <= Math.abs(start - end); i++) {
//             if (y_displacement) {
//                 if (board[start + (i * direction)][other] != null)
//                     return false;
//             } else {
//                 if (board[other][start + (i * direction)] != null)
//                     return false;
//             }
//         }
//
//         return true;
//     }
//
// }

export interface Rook extends Piece {}

export function newRook(colour: Colours, parent: (Square | null) = null): Rook {

    let canMove = (board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean => {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour === colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        if (dy == 0 && dx != 0) {
            return free_movement(board, start.x, end.x, false, start.y);
        }

        else if (dy != 0 && dx == 0) {
            return free_movement(board, start.y, end.y, true, start.x);
        }

        return false;
    }

    return {
        colour: colour,
        piece: Pieces.ROOK,
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