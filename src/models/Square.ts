import {Piece} from "./pieces/Piece";

export interface Square {
    piece: Piece | null;
    x: number;
    y: number;
    highlighted: boolean;
    selected: boolean;
}

export function newSquare(x: number, y: number): Square {
    return {
        piece: null,
        x: x,
        y: y,
        highlighted: false,
        selected: false
    }

}
