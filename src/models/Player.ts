import {Colours} from "./enums";

export class Player_class {
    colour: Colours;

    constructor(colour: Colours) {
        this.colour = colour;
    }

}

export interface Player {
    colour: Colours;
}

export function newPlayer(colour: Colours): Player {
    return {
        colour: colour
    };
}