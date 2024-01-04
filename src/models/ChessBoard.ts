import {Colours} from "./enums";
import {newPawn} from "./pieces/Pawn";
import {newKnight} from "./pieces/Knight";
import {newRook} from "./pieces/Rook";
import {newSquare, Square} from "./Square";

// export class ChessBoard_class {
//     board: Square[][] = [];
//
//     constructor() {
//         // initialise all indexes with Squares
//         for (let i = 0; i < 8; i++) {
//             let current: Square[] = [];
//             this.board.push(current);
//             for (let j = 0; j < 8; j++) {
//                 this.board[i].push(new Square(j, i));
//             }
//         }
//
//         this.reset(); // set up the board with chess pieces
//     }
//
//     private reset() {
//         let colour = Colours.WHITE;
//
//         // set the top of the board as white
//         this.board[0][0].piece = new Rook(colour, this.board[0][0]);
//         this.board[0][1].piece = new Knight(colour, this.board[0][1]);
//         this.board[0][2].piece = new Pawn(colour, this.board[0][2]);  // new Bishop(colour);
//         this.board[0][3].piece = new Pawn(colour, this.board[0][3]);  // new King(colour);
//         this.board[0][4].piece = new Pawn(colour, this.board[0][4]);  // new Queen(colour);
//         this.board[0][5].piece = new Pawn(colour, this.board[0][5]);  // new Bishop(colour);
//         this.board[0][6].piece = new Knight(colour, this.board[0][5]);
//         this.board[0][7].piece = new Rook(colour, this.board[0][5]);
//
//         // set the pawns on the next row
//         for (let i=0; i<8; i++) {
//             this.board[1][i].piece = new Pawn(colour, this.board[1][i]);
//         }
//
//         colour = Colours.BLACK;
//         // set the bottom of the board as black
//         this.board[7][0].piece = new Rook(colour, this.board[7][0]);
//         this.board[7][1].piece = new Knight(colour, this.board[7][1]);
//         this.board[7][2].piece = new Pawn(colour, this.board[7][2]);  // new Bishop(colour);
//         this.board[7][3].piece = new Pawn(colour, this.board[7][3]);  // new King(colour);
//         this.board[7][4].piece = new Pawn(colour, this.board[7][4]);  // new Queen(colour);
//         this.board[7][5].piece = new Pawn(colour, this.board[7][5]);  // new Bishop(colour);
//         this.board[7][6].piece = new Knight(colour, this.board[7][5]);
//         this.board[7][7].piece = new Rook(colour, this.board[7][5]);
//         // set the pawns on the next row
//         for (let i=0; i<8; i++) {
//             this.board[6][i].piece = new Pawn(colour, this.board[6][i]);
//         }
//     }
//
//     public calculate_possible_moves(start: PieceSquare) {
//         let moves: CoordinatePair[] = [];
//         for (let i= 0; i < 8; i++) {
//             for (let j= 0; j < 8; j++) {
//                 let end = {
//                     x: i,
//                     y: j,
//                 };
//
//                 if (start.piece.canMove(this.board, start, end)) {
//                     moves.push(end);
//                 }
//             }
//         }
//
//         return moves;
//     }
//
// }

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
    let colour = Colours.WHITE;

    // set the top of the board as white
    board[0][0].piece = newRook(colour, board[0][0]);
    board[0][1].piece = newKnight(colour, board[0][1]);
    board[0][2].piece = newPawn(colour, board[0][2]);  // new Bishop(colour);
    board[0][3].piece = newPawn(colour, board[0][3]);  // new King(colour);
    board[0][4].piece = newPawn(colour, board[0][4]);  // new Queen(colour);
    board[0][5].piece = newPawn(colour, board[0][5]);  // new Bishop(colour);
    board[0][6].piece = newKnight(colour, board[0][5]);
    board[0][7].piece = newRook(colour, board[0][5]);

    // set the pawns on the next row
    for (let i=0; i<8; i++) {
        board[1][i].piece = newPawn(colour, board[1][i]);
    }

    colour = Colours.BLACK;
    // set the bottom of the board as black
    board[7][0].piece = newRook(colour, board[7][0]);
    board[7][1].piece = newKnight(colour, board[7][1]);
    board[7][2].piece = newPawn(colour, board[7][2]);  // new Bishop(colour);
    board[7][3].piece = newPawn(colour, board[7][3]);  // new King(colour);
    board[7][4].piece = newPawn(colour, board[7][4]);  // new Queen(colour);
    board[7][5].piece = newPawn(colour, board[7][5]);  // new Bishop(colour);
    board[7][6].piece = newKnight(colour, board[7][5]);
    board[7][7].piece = newRook(colour, board[7][5]);
    // set the pawns on the next row
    for (let i=0; i<8; i++) {
        board[6][i].piece = newPawn(colour, board[6][i]);
    }

    return {
        board: board
    };
}