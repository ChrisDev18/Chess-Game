import Piece from "./pieces/Piece";
import {immerable} from "immer"

export default class Square {
    [immerable] = true;
    piece: Piece | null = null;
    x: number;
    y: number;
    highlighted = false;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}