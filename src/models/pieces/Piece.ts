import {CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import {Square} from "../Square";

// export abstract class Piece_class {
//     abstract colour: Colours;
//     abstract piece: Pieces;
//
//     killed: boolean = false;
//     highlighted: boolean = false;
//     parent: Square | null;
//
//     protected constructor(parent: (Square | null) = null) {
//         this.parent = parent
//     }
//
//     abstract canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean;
// }

export interface Piece {
    colour: Colours;
    piece: Pieces;
    killed: boolean;
    highlighted: boolean;
    parent: Square | null;
    canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean;
}