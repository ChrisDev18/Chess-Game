import './PieceView-style.css';
import React from "react";
import {Colours, Pieces} from "../models/enums";

type args = {
    piece: Pieces,
    colour: Colours,
    onClick: React.ReactEventHandler<HTMLInputElement>
}

// React Component for a chess piece
export default function PieceView({piece, colour, onClick}: args) {
    const name = `Piece=${piece}, Colour=${colour}.svg`;

    return (
        <label className="Piece">
            <img alt={`${colour} ${piece}`} src={`${process.env.PUBLIC_URL}/pieces/${name}`}/>
            <input type="radio" name="selected_piece" onClick={onClick} value={piece}/>
        </label>
    );
}