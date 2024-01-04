import {Colours} from "./enums";
import {ChessBoard, newChessBoard} from "./ChessBoard";
import {newPlayer, Player} from "./Player";

export interface Game {
    board: ChessBoard,
    player1: Player,
    player2: Player,
    current_player: Player
}

export function newGame(): Game {
    let player1 = newPlayer(Colours.WHITE);

    return {
        board: newChessBoard(),
        player1: player1,
        player2: newPlayer(Colours.BLACK),
        current_player: player1
    };
}
