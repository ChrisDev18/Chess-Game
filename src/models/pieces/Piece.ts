import {CoordinatePair, Move} from "../Move";
import {Colours, Pieces} from "../enums";
import {Square} from "../Square";
import {Player} from "../Player";


export interface Piece {
    colour: Colours;
    piece: Pieces;
    killed: boolean;
    highlighted: boolean;
    parent: Square | null;
    moved: boolean;
    canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean;
}

// ---Implemented Functions---

// Checks for any pieces between valid start and end squares
export function free_movement(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean {
    let vector = [0, 0];

    let dy = end.y - start.y;
    let dx = end.x - start.x;


    // figure out suitable vector
    if (dx == 0) {
        if (start.y < end.y)
            vector = [0, 1];
        else
            vector = [0, -1];
    }

    else if (dy == 0) {
        if (start.x < end.x)
            vector = [1, 0];
        else
            vector = [-1, 0];
    }

    else if (dx == dy) {
        if (start.x < end.x)
            vector = [1, 1];
        else
            vector = [-1, -1];
    }

    else if (dx == -dy) {
        if (start.x < end.x)
            vector = [1, -1];
        else
            vector = [-1, 1];
    }

    else throw new Error("Invalid movement passed to free_movement()");

    for (let i = 1; i < Math.max(Math.abs(dx), Math.abs(dy)); i++) {
        let [x, y] = [start.x + (i * vector[0]), start.y + (i * vector[1])]
        if (board[y][x].piece != null)
            return false;

    }

    return true;
}

// Moves a piece based on a given Move object. (Should only pass valid moves to function!)
export function move(player: Player, board: Square[][], move: Move): boolean {
    let startSquare = board[move.start.y][move.start.x];
    if (startSquare.piece == null) {
        console.error("No start piece on designated start square to move - this should not be possible with current UI implementation");
        return false;
    }

    if (! startSquare.piece.canMove(board, move.start, move.end)) {
        console.error("Piece cannot be moved - this should not be possible with current UI implementation");
        return false;
    }

    // check for a piece at the end of the move
    let endSquare = board[move.end.y][move.end.x];
    if (endSquare.piece != null) {
        // check the piece is opposite colour
        if (endSquare.piece.colour == startSquare.piece.colour) {
            console.error("Cannot move to square occupied with like-coloured piece - this should not be possible with current UI implementation");
            return false;
        }

        // take the piece
        startSquare.piece.parent = null;
        player.taken_pieces.push(startSquare.piece);
    }

    // move the piece
    startSquare.piece.parent = endSquare;  // change the parent of moving piece
    endSquare.piece = startSquare.piece;  // move piece
    endSquare.piece.moved = true; // mark as moved
    startSquare.piece = null;  // delete from old position
    return true;
}