import './PieceView-style.css';
import React, {useState} from "react";
import {Colours, Pieces} from "../models/enums";

type args = {
    piece: Pieces,
    colour: Colours,
    onClick: React.ReactEventHandler<HTMLInputElement>,
    selectedPiece: number | null,
    i: number,
    disabled: boolean | undefined
    rotated: boolean | undefined
}

// React Component for a chess piece
export default function PieceView({piece, colour, onClick, selectedPiece, i, disabled=false, rotated=false}: args) {
    console.log("Key: " + i);
    const name = `Piece=${piece}, Colour=${colour}.svg`;

    return (
        <label className="Piece">
            <img alt={`${colour} ${piece}`}
                 src={`${process.env.PUBLIC_URL}/pieces/${name}`}
                 className={rotated? "Rotated" : ""}
            />
            <input type="radio"
                   name="selected_piece"
                   onClick={onClick}
                   value={i}
                   checked={selectedPiece == i}
                   disabled={disabled}
            />
        </label>
    );
}