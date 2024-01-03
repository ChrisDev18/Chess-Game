import {Colours} from "./enums";
import ChessBoard from "./ChessBoard";
import Player from "./Player";

export default class Game {
    board = new ChessBoard();
    player1 = new Player(Colours.WHITE);
    player2 = new Player(Colours.BLACK);
    current_player = this.player1;
}
