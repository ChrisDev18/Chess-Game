import {Colours} from "./enums";
import {newPawn} from "./pieces/Pawn";
import {newKnight} from "./pieces/Knight";
import {newRook} from "./pieces/Rook";
import {newSquare, Square} from "./Square";
import {newBishop} from "./pieces/Bishop";
import {newKing} from "./pieces/King";
import {newQueen} from "./pieces/Queen";

export interface ChessBoard {
    board: Square[][];
}

export function newChessBoard(): ChessBoard {
    let board: Square[][] = [];

    // initialise all indexes with Squares
    for (let i = 0; i < 8; i++) {
        let current: Square[] = [];
        board.push(current);
        for (let j = 0; j < 8; j++) {
            board[i].push(newSquare(j, i));
        }
    }

    // set up the board with chess pieces
    let colour = Colours.BLACK;

    // set the top of the board as white
    board[0][0].piece = newRook(colour, board[0][0]);
    board[0][1].piece = newKnight(colour, board[0][1]);
    board[0][2].piece = newBishop(colour, board[0][2]);
    board[0][3].piece = newQueen(colour, board[0][3]);
    board[0][4].piece = newKing(colour, board[0][4]);
    board[0][5].piece = newBishop(colour, board[0][5]);
    board[0][6].piece = newKnight(colour, board[0][6]);
    board[0][7].piece = newRook(colour, board[0][7]);

    // set the pawns on the next row
    for (let i=0; i<8; i++) {
        board[1][i].piece = newPawn(colour, board[1][i]);
    }

    colour = Colours.WHITE;
    // set the bottom of the board as black
    board[7][0].piece = newRook(colour, board[7][0]);
    board[7][1].piece = newKnight(colour, board[7][1]);
    board[7][2].piece = newBishop(colour, board[7][2]);
    board[7][3].piece = newQueen(colour, board[7][3]);
    board[7][4].piece = newKing(colour, board[7][4]);
    board[7][5].piece = newBishop(colour, board[7][5]);
    board[7][6].piece = newKnight(colour, board[7][6]);
    board[7][7].piece = newRook(colour, board[7][7]);
    // set the pawns on the next row
    for (let i=0; i<8; i++) {
        board[6][i].piece = newPawn(colour, board[6][i]);
    }

    return {
        board: board
    };
}
