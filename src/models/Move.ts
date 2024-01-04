import {Piece} from "./pieces/Piece";

export type Move = {
    start: CoordinatePair;
    end: CoordinatePair;
}

export type CoordinatePair = {
    x: number;
    y: number;
};

export type PieceSquare = {
    x: number;
    y: number;
    piece: Piece;
}
