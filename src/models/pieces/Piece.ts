import {CoordinatePair} from "../Move";
import {Colours, Pieces} from "../enums";
import {Square} from "../Square";

export interface Piece {
    colour: Colours;
    piece: Pieces;
    killed: boolean;
    highlighted: boolean;
    parent: Square | null;
    canMove(board: Square[][], start: CoordinatePair, end: CoordinatePair): boolean;
}

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
