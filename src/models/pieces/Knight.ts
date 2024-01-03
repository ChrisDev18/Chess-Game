import Piece from "./Piece";
import {Move, CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import Square from "../Square";

export default class Knight extends Piece {
    colour: Colours;
    piece: Pieces;

    constructor(colour: Colours, parent: (Square | null) = null) {
        super(parent);
        this.colour = colour;
        this.piece = Pieces.KNIGHT;
    }

    canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour == this.colour) {
            return false;
        }

        let x = Math.abs(start.x - end.x);
        let y = Math.abs(start.y - end.y);
        return (x * y == 2);

    }

}