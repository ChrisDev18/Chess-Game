import './PieceView-style.css';
import React, {useState} from "react";
import {Colours, Pieces} from "../models/enums";

type args = {
    piece: Pieces,
    colour: Colours,
    onClick: React.ReactEventHandler<HTMLInputElement>,
    selectedPiece: number | null,
    i: number
}

// React Component for a chess piece
export default function PieceView({piece, colour, onClick, selectedPiece, i}: args) {
    console.log("Key: " + i);
    const name = `Piece=${piece}, Colour=${colour}.svg`;

    return (
        <label className="Piece">
            <img alt={`${colour} ${piece}`} src={`${process.env.PUBLIC_URL}/pieces/${name}`}/>
            <input type="radio"
                   name="selected_piece"
                   onClick={onClick}
                   value={i}
                   checked={selectedPiece == i}
            />
        </label>
    );
}