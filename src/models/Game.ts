import {Colours} from "./enums";
import {ChessBoard, newChessBoard} from "./ChessBoard";
import {newPlayer, Player} from "./Player";
import produce from "immer";

export interface Game {
    board: ChessBoard,
    player1: Player,
    player2: Player,
    current_player: Player
}

export function newGame(): Game {
    let player1 = newPlayer(Colours.WHITE);
    let player2 = newPlayer(Colours.BLACK);

    return {
        board: newChessBoard(),
        player1: player1,
        player2: player2,
        current_player: player1
    };
}

export function switchPlayer(game: Game): Game {
    return produce(game, draftGame => {
        if (game.current_player === game.player1) {
            draftGame.current_player = game.player2
        } else {
            draftGame.current_player = game.player1
        }
        return draftGame;
    });
}
