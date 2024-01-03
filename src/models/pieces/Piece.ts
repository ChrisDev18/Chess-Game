import ChessBoard from "../ChessBoard";
import {Move, CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import Square from "../Square";

export default abstract class Piece {
    abstract colour: Colours;
    abstract piece: Pieces;

    killed: boolean = false;
    highlighted: boolean = false;
    parent: Square | null;

    protected constructor(parent: (Square | null) = null) {
        this.parent = parent
    }

    abstract canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean;
}