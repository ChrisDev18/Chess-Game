import Piece from "./Piece";
import {Move, CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import Square from "../Square";

export default class Pawn extends Piece {
    colour: Colours;
    piece: Pieces;
    has_moved = false;

    constructor(colour: Colours, parent: (Square | null) = null) {
        super(parent);
        this.colour = colour;
        this.piece = Pieces.PAWN;
    }

    canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean {
        let end_piece = board[end.y][end.x].piece;

        if (end_piece?.colour == this.colour)
            return false;

        let dy = end.y - start.y;
        let dx = end.x - start.x;

        // assign the direction of movement
        let direction = 1;

        if (this.colour == Colours.BLACK)
            direction = -1;

        if (dx == 0 && end_piece == null) {
            return dy == direction || (! this.has_moved
                && board[start.y + direction][start.x] != null
                && dy == 2 * direction);
        }

        else if (Math.abs(dx) == 1 && end_piece != null) {
            return dy == direction && end_piece.colour != this.colour;
        }

        return false;
    }

}