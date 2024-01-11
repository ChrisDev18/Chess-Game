import {Colours} from "./enums";
import {Piece} from "./pieces/Piece";

export interface Player {
    colour: Colours;
    taken_pieces: Piece[];
}

export function newPlayer(colour: Colours): Player {
    return {
        colour: colour,
        taken_pieces: []
    };
}
