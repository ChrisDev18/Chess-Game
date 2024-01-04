import {Colours} from "./enums";

export interface Player {
    colour: Colours;
}

export function newPlayer(colour: Colours): Player {
    return {
        colour: colour
    };
}
