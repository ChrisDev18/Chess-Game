import {Colours} from "./enums";
import {newPawn} from "./pieces/Pawn";
import {newKnight} from "./pieces/Knight";
import {newRook} from "./pieces/Rook";
import {newSquare, Square} from "./Square";
import {newBishop} from "./pieces/Bishop";
import {newKing} from "./pieces/King";
import {newQueen} from "./pieces/Queen";
import {CoordinatePair} from "./Move";

export interface ChessBoard {
    board: Square[][];
    selected_piece: CoordinatePair | null
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
    // set the top of the board as black
    let colour = Colours.BLACK;
    board[0][0].piece = newRook(colour);
    board[0][1].piece = newKnight(colour);
    board[0][2].piece = newBishop(colour);
    board[0][3].piece = newQueen(colour);
    board[0][4].piece = newKing(colour);
    board[0][5].piece = newBishop(colour);
    board[0][6].piece = newKnight(colour);
    board[0][7].piece = newRook(colour);
    // set the pawns on the next row
    for (let i=0; i<8; i++) {
        board[1][i].piece = newPawn(colour);
    }


    // set the bottom of the board as white
    colour = Colours.WHITE;
    board[7][0].piece = newRook(colour);
    board[7][1].piece = newKnight(colour);
    board[7][2].piece = newBishop(colour);
    board[7][3].piece = newQueen(colour);
    board[7][4].piece = newKing(colour);
    board[7][5].piece = newBishop(colour);
    board[7][6].piece = newKnight(colour);
    board[7][7].piece = newRook(colour);
    // set the pawns on the next row
    for (let i=0; i<8; i++) {
        board[6][i].piece = newPawn(colour);
    }
    

    return {
        board: board,
        selected_piece: null
    };
}
